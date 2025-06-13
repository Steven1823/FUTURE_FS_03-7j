"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <h2 className="text-3xl font-bold mb-2">Logo Concept</h2>
        <p className="text-gray-400">An evolution of the iconic soundwave into a dynamic, responsive form</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className={`relative w-64 h-64 ${animate ? "animate-pulse-slow" : ""}`}>
          <div className="absolute inset-0 bg-[#1DB954]/20 rounded-full blur-xl"></div>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" fill="#121212" />
            <g className={animate ? "animate-[pulse_4s_ease-in-out_infinite]" : ""}>
              <path d="M30,65 Q50,35 70,65" stroke="#1DB954" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path
                d="M25,50 Q50,20 75,50"
                stroke="#1DB954"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M35,35 Q50,50 65,35"
                stroke="#1DB954"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </g>
          </svg>
        </div>

        <Button
          variant="outline"
          onClick={() => setAnimate(!animate)}
          className="mt-6 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954]/10"
        >
          {animate ? "Pause Animation" : "Play Animation"}
        </Button>
      </div>

      <Tabs defaultValue="standard" className="mt-12">
        <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="responsive">Responsive</TabsTrigger>
        </TabsList>

        <TabsContent value="standard" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-[#1DB954] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-sm text-center">Primary (Green)</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="#1DB954" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="#1DB954" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="#1DB954" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-sm text-center">Light Background</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-sm text-center">Monochrome</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="aspect-[4/3] relative rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                  <div className="absolute top-4 left-4 flex items-center">
                    <div className="w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center">
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
                    <span className="ml-2 font-bold">Spotify</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">NOW PLAYING</p>
                    <h3 className="text-xl font-bold">Blinding Lights</h3>
                    <p className="text-gray-400">The Weeknd</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-center">App Interface</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="aspect-[4/3] relative rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <div className="w-full max-w-xs p-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-8 h-8">
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
                      <div className="text-right">
                        <h3 className="font-bold">Spotify Premium</h3>
                        <p className="text-sm text-gray-400">Sound Your World</p>
                      </div>
                    </div>
                    <div className="h-12 bg-zinc-700 rounded-md mb-4"></div>
                    <div className="h-12 bg-zinc-700 rounded-md mb-4"></div>
                    <div className="h-12 bg-[#1DB954] rounded-md flex items-center justify-center">
                      <span className="font-bold text-black">SIGN UP</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-center">Marketing Materials</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="responsive" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1DB954] to-[#9C42F5] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-sm text-center">Chill Mood</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF4088] to-[#FF6437] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-sm text-center">Energy Mood</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2E77D0] to-[#1DB954] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <g>
                    <path d="M30,65 Q50,35 70,65" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M25,50 Q50,20 75,50" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M35,35 Q50,50 65,35" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-sm text-center">Focus Mood</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
