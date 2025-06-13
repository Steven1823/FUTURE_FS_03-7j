import Hero from "@/components/hero"
import Features from "@/components/features"
import Playlists from "@/components/playlists"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Download from "@/components/download"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Playlists />
      <Pricing />
      <Testimonials />
      <Download />
    </div>
  )
}
