import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Spotify has completely changed how I discover new music. The personalized playlists are spot on!",
    name: "Alex Johnson",
    title: "Music Enthusiast",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "As an indie artist, Spotify has given me a platform to reach listeners all over the world.",
    name: "Samantha Lee",
    title: "Independent Artist",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "The podcast selection is incredible. I've discovered so many new shows that I love.",
    name: "Michael Chen",
    title: "Podcast Listener",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What people are saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join millions of satisfied listeners around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/50 mb-4" />
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
