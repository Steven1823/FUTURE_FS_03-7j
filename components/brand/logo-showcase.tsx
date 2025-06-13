"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogoAnimation from "./logo-animation"

export default function LogoShowcase() {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">SPOTIFY PULSE</h2>
        <p className="text-gray-400">A dynamic identity system that responds to sound and movement</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <LogoAnimation animate={animate} />
        <Button
          variant="outline"
          onClick={() => setAnimate(!animate)}
          className="mt-6 border-[#1ED760] text-[#1ED760] hover:bg-[#1ED760]/10"
        >
          {animate ? "Pause Animation" : "Play Animation"}
        </Button>
      </div>

      <Tabs defaultValue="standard" className="mt-12">
        <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="variations">Variations</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="standard" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-32 h-32 bg-[#1ED760] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-center font-medium">Primary Mark</p>
              <p className="text-xs text-gray-400 text-center mt-1">The circular sound wave icon</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="h-32 flex items-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-[#1ED760] rounded-full flex items-center justify-center mr-3">
                      <svg viewBox="0 0 100 100" className="w-10 h-10">
                        <g>
                          <path
                            d="M30,65 Q50,35 70,65"
                            stroke="black"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M25,50 Q50,20 75,50"
                            stroke="black"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M35,35 Q50,50 65,35"
                            stroke="black"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">SPOTIFY</span>
                  </div>
                  <span className="text-sm font-bold text-[#1ED760] tracking-wider mt-1">PULSE</span>
                </div>
              </div>
              <p className="mt-4 text-center font-medium">Horizontal Lockup</p>
              <p className="text-xs text-gray-400 text-center mt-1">Primary logo with wordmark</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="h-32 flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#1ED760] rounded-full flex items-center justify-center mb-2">
                    <svg viewBox="0 0 100 100" className="w-10 h-10">
                      <g>
                        <path
                          d="M30,65 Q50,35 70,65"
                          stroke="black"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M25,50 Q50,20 75,50"
                          stroke="black"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M35,35 Q50,50 65,35"
                          stroke="black"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <span className="text-xl font-bold tracking-tight">SPOTIFY</span>
                  <span className="text-sm font-bold text-[#1ED760] tracking-wider">PULSE</span>
                </div>
              </div>
              <p className="mt-4 text-center font-medium">Vertical Lockup</p>
              <p className="text-xs text-gray-400 text-center mt-1">For vertical applications</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="variations" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#9C42F5] to-[#0DCCFF] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-center font-medium">Chill Variation</p>
              <p className="text-xs text-gray-400 text-center mt-1">For focus and calm playlists</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#FF36A8] to-[#FF6437] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-center font-medium">Energy Variation</p>
              <p className="text-xs text-gray-400 text-center mt-1">For workout and party playlists</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="#121212" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="#121212" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="#121212" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-center font-medium">Monochrome Reversed</p>
              <p className="text-xs text-gray-400 text-center mt-1">For light backgrounds</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="aspect-video relative rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                  <div className="absolute top-4 left-4 flex items-center">
                    <div className="w-10 h-10 bg-[#1ED760] rounded-full flex items-center justify-center mr-2">
                      <svg viewBox="0 0 100 100" className="w-6 h-6">
                        <g>
                          <path
                            d="M30,65 Q50,35 70,65"
                            stroke="black"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M25,50 Q50,20 75,50"
                            stroke="black"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M35,35 Q50,50 65,35"
                            stroke="black"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold tracking-tight">SPOTIFY</span>
                      <span className="text-xs font-bold text-[#1ED760] -mt-1">PULSE</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[#1ED760] font-semibold">NOW PLAYING</p>
                    <h3 className="text-2xl font-bold">The Less I Know The Better</h3>
                    <p className="text-gray-400">Tame Impala</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-center">App Interface</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="aspect-video relative rounded-md overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-black/60 z-10"></div>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg?height=360&width=640')" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 bg-[#1ED760] rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-12 h-12">
                        <g>
                          <path
                            d="M30,65 Q50,35 70,65"
                            stroke="black"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M25,50 Q50,20 75,50"
                            stroke="black"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M35,35 Q50,50 65,35"
                            stroke="black"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="text-sm uppercase tracking-wider text-[#1ED760]">Your Sound. Your Story.</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-center">Marketing Materials</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Logo Design Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Dynamic</h4>
            <p>
              The logo pulses and reacts to music, creating a living identity that embodies the dynamic nature of sound.
            </p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Adaptable</h4>
            <p>
              Color variations respond to different contexts, moods, and musical genres, creating a flexible system that
              remains recognizable.
            </p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Immersive</h4>
            <p>The circular form creates a sense of immersion and focus, representing how we experience music.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
