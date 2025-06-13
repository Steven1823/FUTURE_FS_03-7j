import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Monitor, Smartphone } from "lucide-react"

export default function Download() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Spotify</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Listen to songs, create playlists, and discover music you'll love. Download the Spotify app for free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Button className="flex items-center justify-center gap-2 h-14">
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-medium">App Store</div>
                </div>
              </Button>

              <Button className="flex items-center justify-center gap-2 h-14">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.265.104-.52.293-.707zM14.5 12.707l2.117 2.117-8.383 4.916 6.266-7.033zm2.116-3.414L14.5 11.293l-6.266-7.033 8.382 4.916zM5.044 2.225L11.8 12l-6.756 9.775-1.36-.796V3.021l1.36-.796z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-medium">Google Play</div>
                </div>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                <span>Desktop</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <span>Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6h-7V2.5a2.5 2.5 0 0 0-5 0V6H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V6h-6V2.5z" />
                </svg>
                <span>Tablet</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-3v-2h-2v2H9v-2H7v2H4V8zm0 11v-5h3v2h2v-2h6v2h2v-2h3v5H4z" />
                </svg>
                <span>TV</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
            <div className="relative">
              <div className="aspect-[4/5] max-w-xs mx-auto relative z-10 animate-float">
                <Image
                  src="/placeholder.svg?height=800&width=640"
                  alt="Spotify Mobile App"
                  width={640}
                  height={800}
                  className="object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute top-1/4 -right-4 md:-right-12 w-48 h-64 bg-card rounded-xl shadow-lg transform rotate-6 -z-0"></div>
              <div className="absolute bottom-1/4 -left-4 md:-left-12 w-48 h-64 bg-card rounded-xl shadow-lg transform -rotate-6 -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
