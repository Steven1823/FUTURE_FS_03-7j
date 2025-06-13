"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { getUserAccessToken } from "@/lib/spotify"
import { toast } from "sonner"

export default function CallbackPage() {
  const [isProcessing, setIsProcessing] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    async function handleCallback() {
      const code = searchParams.get("code")
      const error = searchParams.get("error")

      if (error) {
        setError("Authentication failed: " + error)
        setIsProcessing(false)
        return
      }

      if (!code) {
        setError("No authorization code provided")
        setIsProcessing(false)
        return
      }

      try {
        const data = await getUserAccessToken(code)

        // Store tokens in localStorage
        localStorage.setItem("spotify_access_token", data.access_token)
        localStorage.setItem("spotify_refresh_token", data.refresh_token)
        localStorage.setItem("spotify_expires_at", (Date.now() + data.expires_in * 1000).toString())

        toast.success("Successfully logged in!")
        router.push("/")
      } catch (error) {
        console.error("Error exchanging code for token:", error)
        setError("Failed to complete authentication")
        setIsProcessing(false)
      }
    }

    handleCallback()
  }, [searchParams, router])

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-4">
          <p>{error}</p>
        </div>
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Back to Login
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
      <p>Completing authentication...</p>
    </div>
  )
}
