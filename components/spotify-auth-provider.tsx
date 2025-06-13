"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { refreshAccessToken } from "@/lib/spotify"

interface SpotifyAuthContextType {
  accessToken: string | null
  refreshToken: string | null
  expiresAt: number | null
  isAuthenticated: boolean
  isLoading: boolean
  login: () => void
  logout: () => void
}

const SpotifyAuthContext = createContext<SpotifyAuthContextType>({
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  isAuthenticated: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
})

export const useSpotifyAuth = () => useContext(SpotifyAuthContext)

export function SpotifyAuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)
  const [expiresAt, setExpiresAt] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("spotify_access_token")
    const storedRefreshToken = localStorage.getItem("spotify_refresh_token")
    const storedExpiresAt = localStorage.getItem("spotify_expires_at")

    if (storedAccessToken && storedRefreshToken && storedExpiresAt) {
      setAccessToken(storedAccessToken)
      setRefreshToken(storedRefreshToken)
      setExpiresAt(Number.parseInt(storedExpiresAt, 10))
    }

    setIsLoading(false)
  }, [])

  // Auto refresh token when it's about to expire
  useEffect(() => {
    if (!accessToken || !refreshToken || !expiresAt) return

    const timeUntilExpiry = expiresAt - Date.now()
    if (timeUntilExpiry <= 0) {
      refreshToken && handleRefreshToken(refreshToken)
      return
    }

    // Refresh 5 minutes before expiry
    const refreshBuffer = 5 * 60 * 1000
    const timeUntilRefresh = timeUntilExpiry - refreshBuffer

    const refreshTimer = setTimeout(() => {
      refreshToken && handleRefreshToken(refreshToken)
    }, timeUntilRefresh)

    return () => clearTimeout(refreshTimer)
  }, [accessToken, refreshToken, expiresAt])

  const handleRefreshToken = async (token: string) => {
    try {
      const data = await refreshAccessToken(token)

      const newExpiresAt = Date.now() + data.expires_in * 1000

      setAccessToken(data.access_token)
      setExpiresAt(newExpiresAt)

      localStorage.setItem("spotify_access_token", data.access_token)
      localStorage.setItem("spotify_expires_at", newExpiresAt.toString())
    } catch (error) {
      console.error("Failed to refresh token:", error)
      logout()
    }
  }

  const login = () => {
    const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const redirect_uri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI

    if (!client_id || !redirect_uri) {
      console.error("Missing Spotify API credentials")
      return
    }

    const scopes = [
      "user-read-private",
      "user-read-email",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-top-read",
      "user-library-read",
      "user-read-recently-played",
    ]

    const params = new URLSearchParams({
      client_id,
      response_type: "code",
      redirect_uri,
      scope: scopes.join(" "),
      show_dialog: "true",
    })

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`
  }

  const logout = () => {
    setAccessToken(null)
    setRefreshToken(null)
    setExpiresAt(null)

    localStorage.removeItem("spotify_access_token")
    localStorage.removeItem("spotify_refresh_token")
    localStorage.removeItem("spotify_expires_at")

    router.push("/login")
  }

  const isAuthenticated = !!accessToken && !!expiresAt && expiresAt > Date.now()

  return (
    <SpotifyAuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        expiresAt,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </SpotifyAuthContext.Provider>
  )
}
