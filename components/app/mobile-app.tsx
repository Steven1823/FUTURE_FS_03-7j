"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, SkipBack, SkipForward, Heart, Share2, Volume2, Search, Home, Library, Plus } from "lucide-react"

export default function MobileApp() {
  const [isPlaying, setIsPlaying] = useState(false)

  const playlists = [
    {
      name: "Chill Vibes",
      description: "Relaxed beats to unwind to",
      color: "from-[#0DCCFF] to-[#1ED760]",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Energy Boost",
      description: "Upbeat tracks to get you moving",
      color: "from-[#FF36A8] to-[#FF6437]",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Focus Flow",
      description: "Concentration-enhancing sounds",
      color: "from-[#9C42F5] to-[#0DCCFF]",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Throwback Hits",
      description: "Classics from the past decades",
      color: "from-[#FF6437] to-[#9C42F5]",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Mobile UI Design</h2>
        <p className="text-gray-400">A reimagined interface that puts music discovery and personalization first</p>
      </div>

      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-zinc-800">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="player">Now Playing</TabsTrigger>
          <TabsTrigger value="playlist">Playlist</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-sm">
            <div className="rounded-3xl overflow-hidden border-8 border-zinc-800 bg-zinc-900">
              <TabsContent value="home" className="mt-0">
                <div className="p-4 h-[600px] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold text-lg">Good evening</h3>
                      <p className="text-sm text-gray-400">Discover your sound</p>
                    </div>
                    <div className="w-8 h-8 bg-[#1ED760] rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">JD</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Your Vibe Today</h4>
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {["Energetic", "Focused", "Chill", "Nostalgic"].map((vibe, index) => (
                        <div
                          key={index}
                          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                            index === 0 ? "bg-[#1ED760] text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
                          }`}
                        >
                          {vibe}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Made for You</h4>
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {playlists.map((playlist, index) => (
                        <div key={index} className="flex-shrink-0 w-32">
                          <div
                            className={`aspect-square rounded-lg bg-gradient-to-br ${playlist.color} relative overflow-hidden`}
                          >
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
                    <h4 className="font-medium mb-3">Recently Played</h4>
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

                  <div className="fixed bottom-0 left-0 right-0 bg-zinc-800/90 backdrop-blur-sm p-3 flex items-center">
                    <div className="w-10 h-10 bg-zinc-700 rounded mr-3"></div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium">Current Track</p>
                      <p className="text-xs text-gray-400">Current Artist</p>
                    </div>
                    <button
                      className="w-8 h-8 flex items-center justify-center"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="player" className="mt-0">
                <div className="bg-gradient-to-br from-zinc-900 to-black p-4 h-[600px] flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <button className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 18L9 12L15 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="text-center">
                      <p className="text-xs text-gray-400">NOW PLAYING</p>
                      <p className="text-sm">Album Name</p>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-[#1ED760] to-[#9C42F5] rounded-lg shadow-xl mb-8 relative overflow-hidden">
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
                        <div className="h-full bg-[#1ED760] rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>1:24</span>
                        <span>3:20</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full px-4 mb-8">
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17 17L17 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 15L17 17V7L13 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 9L7 7V17L11 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="hover:text-white transition-colors">
                        <SkipBack size={24} />
                      </button>
                      <button
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                      </button>
                      <button className="hover:text-white transition-colors">
                        <SkipForward size={24} />
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17 17L17 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 15L17 17V7L13 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 9L7 7V17L11 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 4L20 20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 4L4 20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between w-full px-4">
                      <button className="text-[#1ED760]">
                        <Heart size={20} fill="#1ED760" />
                      </button>
                      <button className="flex items-center">
                        <Volume2 size={20} className="mr-2" />
                        <div className="w-24 h-1 bg-zinc-700 rounded-full">
                          <div className="h-full bg-white rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </button>
                      <button>
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="playlist" className="mt-0">
                <div className="h-[600px] overflow-y-auto">
                  <div className="aspect-[3/2] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9C42F5] to-[#FF36A8]"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-[#1ED760] rounded-full flex items-center justify-center mr-2">
                          <svg viewBox="0 0 100 100" className="w-4 h-4 text-black">
                            <g>
                              <path
                                d="M30,65 Q50,35 70,65"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <path
                                d="M25,50 Q50,20 75,50"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <path
                                d="M35,35 Q50,50 65,35"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-xs font-medium">PLAYLIST</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-1">Energy Boost</h3>
                      <p className="text-sm">Upbeat tracks to get you moving</p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs">Created by Spotify</span>
                        <span className="mx-2">•</span>
                        <span className="text-xs">2.3M likes</span>
                        <span className="mx-2">•</span>
                        <span className="text-xs">50 songs, 3hr 25min</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <button className="w-12 h-12 rounded-full bg-[#1ED760] flex items-center justify-center">
                        <Play size={24} className="text-black" />
                      </button>
                      <div className="flex space-x-4">
                        <button>
                          <Heart size={24} />
                        </button>
                        <button>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              fill="currentColor"
                            />
                            <path
                              d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                              fill="currentColor"
                            />
                            <path
                              d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[...Array(10)].map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                        >
                          <div className="w-8 text-center text-gray-400 mr-3">
                            <span className="text-sm">{index + 1}</span>
                          </div>
                          <div className="w-10 h-10 bg-zinc-700 rounded mr-3"></div>
                          <div className="flex-grow">
                            <p className="text-sm font-medium">Track Name</p>
                            <p className="text-xs text-gray-400">Artist</p>
                          </div>
                          <div className="text-xs text-gray-400">3:45</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="profile" className="mt-0">
                <div className="p-4 h-[600px] overflow-y-auto">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-[#1ED760] rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-black">JD</span>
                    </div>
                    <div>
                      <h3 className="font-bold">John Doe</h3>
                      <p className="text-sm text-gray-400">@johndoe</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Your Sonic Fingerprint</h4>
                    <div className="aspect-[2/1] bg-gradient-to-br from-[#1ED760] to-[#9C42F5] rounded-lg relative overflow-hidden">
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
                    <h4 className="font-medium mb-3">Public Playlists</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-zinc-800 rounded-lg overflow-hidden">
                          <div className="aspect-square bg-zinc-700"></div>
                          <div className="p-2">
                            <p className="text-sm font-medium">Playlist Name</p>
                            <p className="text-xs text-gray-400">10 songs</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-sm border-t border-zinc-800">
                <div className="flex justify-around p-3">
                  <button className="flex flex-col items-center">
                    <Home size={20} className="text-[#1ED760]" />
                    <span className="text-xs mt-1 text-[#1ED760]">Home</span>
                  </button>
                  <button className="flex flex-col items-center text-gray-400">
                    <Search size={20} />
                    <span className="text-xs mt-1">Search</span>
                  </button>
                  <button className="flex flex-col items-center text-gray-400">
                    <Library size={20} />
                    <span className="text-xs mt-1">Library</span>
                  </button>
                  <button className="flex flex-col items-center text-gray-400">
                    <Plus size={20} />
                    <span className="text-xs mt-1">Create</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">UI Design Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Immersive</h4>
            <p>
              Deep, rich backgrounds and vibrant accents create an immersive environment that puts music at the center.
            </p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Responsive</h4>
            <p>UI elements that respond to music, user interaction, and context, creating a living interface.</p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Personal</h4>
            <p>Adaptive experiences that reflect individual tastes, moods, and listening habits.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Microinteractions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="font-bold mb-4">Sound-Reactive UI</h4>
            <div className="flex justify-center">
              <div className="flex items-end h-24 space-x-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-[#1ED760] rounded-full animate-pulse"
                    style={{
                      height: `${Math.abs(Math.sin(i * 0.5) * 100)}%`,
                      animationDelay: `${i * 0.05}s`,
                      animationDuration: "0.8s",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <p className="text-sm text-center mt-4">
              UI elements that pulse and move in response to the audio being played
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="font-bold mb-4">Mood-Based Themes</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-[#0DCCFF] to-[#1ED760] p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium">Chill</span>
              </div>
              <div className="bg-gradient-to-br from-[#9C42F5] to-[#0DCCFF] p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium">Focus</span>
              </div>
              <div className="bg-gradient-to-br from-[#FF36A8] to-[#FF6437] p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium">Energy</span>
              </div>
              <div className="bg-gradient-to-br from-[#FF6437] to-[#9C42F5] p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium">Nostalgic</span>
              </div>
            </div>
            <p className="text-sm text-center mt-4">Color themes that adapt to the mood and genre of the music</p>
          </div>
        </div>
      </div>
    </div>
  )
}
