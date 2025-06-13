"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Heart, Share2, Volume2 } from "lucide-react"

export default function MobileApp() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const playlists = [
    {
      name: "Chill Vibes",
      description: "Relaxed beats to unwind to",
      color: "from-[#2E77D0] to-[#1DB954]",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Energy Boost",
      description: "Upbeat tracks to get you moving",
      color: "from-[#FF4088] to-[#FF6437]",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Focus Flow",
      description: "Concentration-enhancing sounds",
      color: "from-[#9C42F5] to-[#2E77D0]",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Throwback Hits",
      description: "Classics from the past decades",
      color: "from-[#FF6437] to-[#9C42F5]",
      image: "/placeholder.svg?height=300&width=300"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Mobile App UI</h2>
        <p className="text-gray-400">
          A reimagined interface that puts music discovery and personalization first
        </p>
      </div>
      
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="player">Player</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-sm">
            <div className="rounded-3xl overflow-hidden border-8 border-zinc-800 bg-zinc-900">
              <TabsContent value="home" className="mt-0">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold text-lg">Good evening</h3>
                      <p className="text-sm text-gray-400">Discover your sound</p>
                    </div>
                    <div className="w-8 h-8 bg-zinc-800 rounded-full"></div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Made for you</h4>
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {playlists.map((playlist, index) => (
                        <div key={index} className="flex-shrink-0 w-32">
                          <div className={`aspect-square rounded-lg bg-gradient-to-br ${playlist.color} relative overflow-hidden`}>
                            <Image
                              src={playlist.image || "/placeholder.svg"}
                              alt={playlist.name}
                              width={128}
                              height={128}
                              className="object-cover mix-blend-overlay opacity-60"
                            />
                          </div>
                          <p className="text-sm font-medium mt-2">{playlist.name}</p>
                          <p className="text-xs text-gray-400">{playlist.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Recently played</h4>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-center p-2 bg-zinc-800 rounded-lg">
                          <div className="w-10 h-10 bg-zinc-700 rounded mr-3"></div>
                          <div>
                            <p className="text-sm font-medium">Track Name</p>
                            <p className="text-xs text-gray-400">Artist</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="fixed bottom-0 left-0 right-0 bg-zinc-800 p-3 flex items-center">
                    <div className="w-10 h-10 bg-zinc-700 rounded mr-3"></div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium">Current Track</p>
                      <p className="text-xs text-gray-400">Current Artist</p>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center">
                      <Play size={18} />
                    </button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="player" className="mt-0">
                <div className="bg-gradient-to-br from-zinc-900 to-black p-4 h-[600px] flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <button className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className="text-center">
                      <p className="text-xs text-gray-400">NOW PLAYING</p>
                      <p className="text-sm">Album Name</p>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                        <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/>
                        <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-[#1DB954] to-[#9C42F5] rounded-lg shadow-xl mb-8 relative overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Album Cover"
                        width={300}
                        height={300}
                        className="object-cover mix-blend-overlay opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-8 h-8 text-white">
                            <g>
                              <path 
                                d="M30,65 Q50,35 70,65" 
                                stroke="currentColor" 
                                strokeWidth="6" 
                                fill="none" 
                                strokeLinecap="round"
                              />
                              <path 
                                d="M25,50 Q50,20 75,50" 
                                stroke="currentColor" 
                                strokeWidth="6" 
                                fill="none" 
                                strokeLinecap="round" 
                              />
                              <path 
                                d="M35,35 Q50,50 65,35" 
                                stroke="currentColor" 
                                strokeWidth="6" 
                                fill="none" 
                                strokeLinecap="round" 
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-8 w-full">
                      <h3 className="text-xl font-bold mb-1">Blinding Lights</h3>
                      <p className="text-gray-400">The Weeknd</p>
                    </div>
                    
                    <div className="w-full mb-8">
                      <div className="h-1 bg-zinc-700 rounded-full w-full mb-2">
                        <div className="h-full bg-[#1DB954] rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>1:24</span>
                        <span>3:20</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between w-full px-4 mb-8">
                      <button className="text-gray-400">
                        <Shuffle size={20} />
                      </button>
                      <button>
                        <SkipBack size={24} />
                      </button>
                      <button 
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                      </button>
                      <button>
                        <SkipForward size={24} />
                      </button>
                      <button className="text-gray-400">
                        <Repeat size={20} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between w-full px-4">
                      <button>
                        <Heart size={20} />
                      </button>
                      <button className="flex items-center">
                        <Volume2 size={20} className="mr-2" />
                        <div className="w-24 h-1 bg-zinc-700 rounded-full">
                          <div className="h-full bg-white rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </button>
                      <button>
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="profile" className="mt-0">
                <div className="p-4 h-[600px]">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-bold">Username</h3>
                      <p className="text-sm text-gray-400">View Profile</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Your Sonic Fingerprint</h4>
                    <div className="aspect-[2/1] bg-gradient-to-br from-[#1DB954] to-[#9C42F5] rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 200 100" className="w-full h-full text-white/20">
                          {[...Array(10)].map((_, i) => (
                            <path
                              key={i}
                              d={`M0,${50 + Math.sin(i * 0.5) * 30} Q${i * 20 + 10},${50 + Math.cos(i * 0.8) * 40} ${i * 20 + 20},${50 + Math.sin(i * 0.3) * 30}`}
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            />
                          ))}
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="font-bold text-lg">Your 2025 Wrapped</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Your Top Genres</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Pop", "R&B", "Hip-Hop", "Electronic", "Rock"].map((genre, index) => (
                        <span key={index} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Recently Played</h4>
                    <div className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center p-2 bg-zinc-800 rounded-lg">
                          <div className="w-10 h-10 bg-zinc-700 rounded mr-3"></div>
                          <div>
                            <p className="text-sm font-medium">Track Name</p>
                            <p className="text-xs text-gray-400">Artist</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
      
      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">UI Design Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Immersive</h\
