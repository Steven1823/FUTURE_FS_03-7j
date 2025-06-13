import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const playlists = [
  {
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    image: "/placeholder.svg?height=300&width=300",
    songs: "50 songs",
  },
  {
    title: "RapCaviar",
    description: "New music from Drake, Kendrick Lamar and more",
    image: "/placeholder.svg?height=300&width=300",
    songs: "50 songs",
  },
  {
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s.",
    image: "/placeholder.svg?height=300&width=300",
    songs: "100 songs",
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs that continue to inspire generations.",
    image: "/placeholder.svg?height=300&width=300",
    songs: "75 songs",
  },
]

export default function Playlists() {
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
          {playlists.map((playlist, index) => (
            <Card key={index} className="overflow-hidden bg-card/50 hover:bg-card transition-all duration-300 group">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="aspect-square rounded-md overflow-hidden">
                    <Image
                      src={playlist.image || "/placeholder.svg"}
                      alt={playlist.title}
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
                <h3 className="font-semibold mb-1">{playlist.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{playlist.description}</p>
                <p className="text-xs text-muted-foreground">{playlist.songs}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
