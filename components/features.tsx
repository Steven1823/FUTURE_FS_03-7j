import { Music, Headphones, Radio, Mic, Clock, CloudLightning } from "lucide-react"

const features = [
  {
    icon: <Music className="h-8 w-8" />,
    title: "Millions of songs",
    description: "Access over 100 million songs and 5 million podcast episodes.",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Offline listening",
    description: "Download music and listen without an internet connection.",
  },
  {
    icon: <Radio className="h-8 w-8" />,
    title: "Personalized playlists",
    description: "Discover new music based on what you already love.",
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: "Original podcasts",
    description: "Exclusive shows you won't find anywhere else.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "No interruptions",
    description: "Premium users enjoy ad-free music listening.",
  },
  {
    icon: <CloudLightning className="h-8 w-8" />,
    title: "High quality audio",
    description: "Experience crystal clear sound with Premium.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose Spotify?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spotify gives you instant access to millions of songs and other content from artists all over the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
