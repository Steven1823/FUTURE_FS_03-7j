import Image from "next/image"

export default function SocialMedia() {
  const campaigns = [
    {
      title: "#YourSoundStory",
      description: "Campaign focused on how music connects to life moments and personal narratives",
      platform: "Instagram, TikTok",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "#PulseCheck",
      description: "Real-time trending music and cultural moments with interactive polls",
      platform: "Twitter/X, Instagram",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "#SoundScapes",
      description: "Showcasing where people listen to their music with location-based templates",
      platform: "Instagram, TikTok",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  const templates = [
    {
      name: "Looping Audio Covers",
      description: "Circular waveform animations that respond to song highlights",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lyric Reels",
      description: "Dynamic typography animations with words that pulse to the beat",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Vibe Check Quizzes",
      description: "Interactive story templates with mood-based color systems",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "User Highlights",
      description: "Templates celebrating new artist finds and listening stats",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Social Media Branding</h2>
        <p className="text-gray-400">Engaging content that connects users through shared musical experiences</p>
      </div>

      <div className="bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Hashtag Campaigns</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-zinc-700 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src={campaign.image || "/placeholder.svg"} alt={campaign.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
                    <p className="text-sm text-[#1ED760]">{campaign.platform}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm">{campaign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Social Templates</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {templates.map((template, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image src={template.image || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm">{template.name}</h4>
                <p className="text-xs text-gray-400 mt-1">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Platform-Specific Assets</h3>
          <div className="space-y-4">
            <div className="bg-zinc-700 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Twitter/X Header</h4>
              <div className="aspect-[3/1] bg-gradient-to-r from-[#121212] to-[#1ED760]/20 rounded-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#1ED760] rounded-full flex items-center justify-center mr-3">
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
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Animated waveform header that represents the brand's audio identity
              </p>
            </div>

            <div className="bg-zinc-700 p-4 rounded-lg">
              <h4 className="font-bold mb-2">TikTok Profile</h4>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1ED760] to-[#0DCCFF] rounded-full flex items-center justify-center mr-4">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <g>
                      <path d="M30,65 Q50,35 70,65" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                      <path d="M25,50 Q50,20 75,50" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                      <path d="M35,35 Q50,50 65,35" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">spotifypulse</p>
                  <p className="text-xs text-gray-400">Your Sound. Your Story.</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Video loop background showing abstract sound visualizations</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Content Strategy</h3>
          <div className="space-y-4">
            <div className="bg-zinc-700 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Content Pillars</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#1ED760] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>
                    <strong>Discovery:</strong> Highlighting new artists, genres, and musical connections
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#9C42F5] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>
                    <strong>Community:</strong> Showcasing how music brings people together
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#FF36A8] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>
                    <strong>Culture:</strong> Connecting music to broader cultural moments and movements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#0DCCFF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>
                    <strong>Personal:</strong> Celebrating individual stories and connections to music
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-700 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Content Calendar</h4>
              <p className="text-sm mb-3">
                Strategic content planning aligned with music releases, cultural moments, and user behaviors:
              </p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center justify-between">
                  <span>New Music Friday</span>
                  <span className="text-[#1ED760]">Weekly</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Artist Spotlights</span>
                  <span className="text-[#1ED760]">Bi-weekly</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Vibe Check Polls</span>
                  <span className="text-[#1ED760]">Mondays</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Throwback Thursday</span>
                  <span className="text-[#1ED760]">Thursdays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
