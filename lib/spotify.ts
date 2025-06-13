import { URLSearchParams } from "url"

// Spotify API endpoints
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"
const API_ENDPOINT = "https://api.spotify.com/v1"

// Types
export interface SpotifyUser {
  id: string
  display_name: string
  email: string
  images: { url: string }[]
  product: string
}

export interface SpotifyPlaylist {
  id: string
  name: string
  description: string
  images: { url: string }[]
  tracks: {
    total: number
  }
}

export interface SpotifyTrack {
  id: string
  name: string
  artists: { id: string; name: string }[]
  album: {
    id: string
    name: string
    images: { url: string }[]
  }
  duration_ms: number
}

// Get access token using client credentials flow
export async function getAccessToken(): Promise<string> {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET

  if (!client_id || !client_secret) {
    throw new Error("Missing Spotify API credentials")
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }).toString(),
    cache: "no-store",
  })

  const data = await response.json()
  return data.access_token
}

// Get access token using authorization code flow (for user-specific data)
export async function getUserAccessToken(code: string): Promise<{
  access_token: string
  refresh_token: string
  expires_in: number
}> {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI

  if (!client_id || !client_secret || !redirect_uri) {
    throw new Error("Missing Spotify API credentials")
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri,
    }).toString(),
  })

  return response.json()
}

// Refresh access token
export async function refreshAccessToken(refresh_token: string): Promise<{
  access_token: string
  expires_in: number
}> {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET

  if (!client_id || !client_secret) {
    throw new Error("Missing Spotify API credentials")
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }).toString(),
  })

  return response.json()
}

// Get current user profile
export async function getCurrentUser(access_token: string): Promise<SpotifyUser> {
  const response = await fetch(`${API_ENDPOINT}/me`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch user profile")
  }

  return response.json()
}

// Get featured playlists
export async function getFeaturedPlaylists(access_token: string): Promise<SpotifyPlaylist[]> {
  const response = await fetch(`${API_ENDPOINT}/browse/featured-playlists?limit=6`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch featured playlists")
  }

  const data = await response.json()
  return data.playlists.items
}

// Get user's playlists
export async function getUserPlaylists(access_token: string): Promise<SpotifyPlaylist[]> {
  const response = await fetch(`${API_ENDPOINT}/me/playlists?limit=10`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch user playlists")
  }

  const data = await response.json()
  return data.items
}

// Get playlist tracks
export async function getPlaylistTracks(access_token: string, playlist_id: string): Promise<SpotifyTrack[]> {
  const response = await fetch(`${API_ENDPOINT}/playlists/${playlist_id}/tracks?limit=20`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch playlist tracks")
  }

  const data = await response.json()
  return data.items.map((item: any) => item.track)
}

// Get recommendations based on seed genres
export async function getRecommendations(
  access_token: string,
  seed_genres: string[] = ["pop", "rock", "hip-hop"],
): Promise<SpotifyTrack[]> {
  const response = await fetch(`${API_ENDPOINT}/recommendations?limit=10&seed_genres=${seed_genres.join(",")}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations")
  }

  const data = await response.json()
  return data.tracks
}
