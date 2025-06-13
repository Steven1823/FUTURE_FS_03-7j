"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useSpotifyAuth } from "@/components/spotify-auth-provider"
import { getFeaturedPlaylists, type SpotifyPlaylist } from "@/lib/spotify"
import { toast } from "sonner"

export default function Playlists() {
  const { accessToken, isAuthenticated } = useSpotifyAuth()
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPlaylists() {
      if (!accessToken) return

      try {
        setIsLoading(true)
        const data = await getFeaturedPlaylists(accessToken)
        setPlaylists(data)
      } catch (error) {
        console.error("Failed to fetch playlists:", error)
        toast.error("Failed to load playlists")
      } finally {
        setIsLoading(false)
      }
    }

    if (isAuthenticated) {
      fetchPlaylists()
    }
  }, [accessToken, isAuthenticated])

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Spotify Playlists</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">Loading playlists...</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="overflow-hidden bg-card/50">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <div className="aspect-square rounded-md overflow-hidden bg-muted animate-pulse"></div>
                  </div>
                  <div className="h-5 bg-muted animate-pulse rounded mb-2"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Spotify Playlists</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Playlists made just for you, based on your taste.</p>
          </div>
          <Button variant="link" className="mt-4 md:mt-0">
            Show all
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <Card
              key={playlist.id}
              className="overflow-hidden bg-card/50 hover:bg-card transition-all duration-300 group"
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="aspect-square rounded-md overflow-hidden">
                    <Image
                      src={playlist.images[0]?.url || "/placeholder.svg?height=300&width=300"}
                      alt={playlist.name}
                      width={300}
                      height={300}
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button
                      size="icon"
                      className="rounded-full bg-primary shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Play className="h-5 w-5 text-primary-foreground" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{playlist.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{playlist.description}</p>
                <p className="text-xs text-muted-foreground">{playlist.tracks.total} songs</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
