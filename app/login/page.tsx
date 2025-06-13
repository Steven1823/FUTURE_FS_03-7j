"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSpotifyAuth } from "@/components/spotify-auth-provider"
import { toast } from "sonner"

export default function LoginPage() {
  const { login, isAuthenticated, isLoading } = useSpotifyAuth()

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      window.location.href = "/"
    }
  }, [isAuthenticated, isLoading])

  const handleLogin = () => {
    try {
      login()
    } catch (error) {
      console.error("Login error:", error)
      toast.error("Failed to initiate Spotify login. Please try again.")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <span className="sr-only">Spotify</span>
            <svg className="h-12 w-12 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.65 14.65c-.2.2-.51.2-.71 0-1.79-1.77-4.39-2.15-6.79-1.44-.33.09-.66-.12-.75-.44-.09-.33.12-.66.44-.75 2.82-.82 5.82-.39 7.95 1.5.2.19.2.5 0 .69zm1.23-2.75c-.25.25-.65.25-.9 0-2.05-2.05-5.18-2.65-7.6-1.45-.29.14-.65.02-.79-.28-.14-.29-.02-.65.28-.79 2.77-1.35 6.26-.69 8.61 1.66.25.25.25.65 0 .9zm.11-2.78c-.25.25-.67.25-.92 0-2.36-2.36-6.29-2.88-9.1-1.58-.34.16-.74.01-.9-.33-.16-.34-.01-.74.33-.9 3.26-1.46 7.68-.86 10.52 1.98.25.25.25.67 0 .92z" />
            </svg>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Log in to Spotify</h2>
          <p className="mt-2 text-sm text-muted-foreground">Connect with your Spotify account to access your music</p>
        </div>

        <div className="mt-8 space-y-6">
          <Button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-2 h-12 bg-[#1DB954] hover:bg-[#1ed760] text-black"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.65 14.65c-.2.2-.51.2-.71 0-1.79-1.77-4.39-2.15-6.79-1.44-.33.09-.66-.12-.75-.44-.09-.33.12-.66.44-.75 2.82-.82 5.82-.39 7.95 1.5.2.19.2.5 0 .69zm1.23-2.75c-.25.25-.65.25-.9 0-2.05-2.05-5.18-2.65-7.6-1.45-.29.14-.65.02-.79-.28-.14-.29-.02-.65.28-.79 2.77-1.35 6.26-.69 8.61 1.66.25.25.25.65 0 .9zm.11-2.78c-.25.25-.67.25-.92 0-2.36-2.36-6.29-2.88-9.1-1.58-.34.16-.74.01-.9-.33-.16-.34-.01-.74.33-.9 3.26-1.46 7.68-.86 10.52 1.98.25.25.25.67 0 .92z" />
            </svg>
            <span>Continue with Spotify</span>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">About</span>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              This application uses the Spotify Web API to access your Spotify account data. We only request read access
              to your profile and playlists.
            </p>
            <p className="mt-2">
              By continuing, you agree to Spotify's{" "}
              <a
                href="https://www.spotify.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://www.spotify.com/legal/end-user-agreement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Terms of Use
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
