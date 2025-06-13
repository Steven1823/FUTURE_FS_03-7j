import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Music for <span className="gradient-text">everyone</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl text-muted-foreground">
            Millions of songs, podcasts, and playlists. No credit card needed.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            Get Spotify Free
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link href="/terms" className="underline hover:text-primary">
              Terms and conditions
            </Link>{" "}
            apply.
          </p>
        </div>

        <div className="mt-16 md:mt-24 relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl opacity-20"></div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-5xl">
              <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/placeholder.svg?height=1080&width=1920"
                  alt="Spotify Interface"
                  width={1920}
                  height={1080}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-primary/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
