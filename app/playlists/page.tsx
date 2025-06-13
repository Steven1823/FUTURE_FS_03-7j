"use client"
import MoodBasedPlaylist from "@/components/mood-based-playlist"
import MoodSelector from "@/components/mood-selector"
import { useMood } from "@/components/mood-provider"

export default function PlaylistsPage() {
  const { currentMood, moodGradient } = useMood()

  // Sample playlists data
  const playlists = [
    {
      title: "Energy Boost",
      description: "High-tempo tracks to get you moving",
      coverUrl: "/placeholder.svg?height=300&width=300",
      tracks: 25,
      mood: "energetic",
    },
    {
      title: "Chill Vibes",
      description: "Relaxed beats to unwind to",
      coverUrl: "/placeholder.svg?height=300&width=300",
      tracks: 30,
      mood: "chill",
    },
    {
      title: "Deep Focus",
      description: "Concentration-enhancing instrumentals",
      coverUrl: "/placeholder.svg?height=300&width=300",
      tracks: 20,
      mood: "focus",
    },
    {
      title: "Throwback Hits",
      description: "Classics from the past decades",
      coverUrl: "/placeholder.svg?height=300&width=300",
      tracks: 40,
      mood: "nostalgic",
    },
    {
      title: "Rainy Day",
      description: "Melancholic tunes for reflection",
      coverUrl: "/placeholder.svg?height=300&width=300",
      tracks: 18,
      mood: "melancholy",
    },
    {
      title: "Today's Top Hits",
      description: "The hottest tracks right now",
      coverUrl: "/placeholder.svg?height=300&width=300",
      tracks: 50,
      mood: "default",
    },
  ]

  // Filter playlists based on current mood or show all if default
  const filteredPlaylists =
    currentMood === "default"
      ? playlists
      : playlists.filter((playlist) => playlist.mood === currentMood || playlist.mood === "default")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mood-Based Playlists</h1>
          <p className="text-muted-foreground">Discover playlists that match your current mood</p>
        </div>
        <MoodSelector />
      </div>

      <div className={`p-6 rounded-lg mb-8 ${moodGradient}`}>
        <h2 className="text-2xl font-bold text-white">
          {currentMood === "default"
            ? "All Moods"
            : `${currentMood.charAt(0).toUpperCase() + currentMood.slice(1)} Mood`}
        </h2>
        <p className="text-white/80">
          {currentMood === "default"
            ? "Explore playlists across all moods"
            : `Playlists curated for your ${currentMood} mood`}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {filteredPlaylists.map((playlist, index) => (
          <MoodBasedPlaylist
            key={index}
            title={playlist.title}
            description={playlist.description}
            coverUrl={playlist.coverUrl}
            tracks={playlist.tracks}
          />
        ))}
      </div>
    </div>
  )
}
