import { Music, Zap, Palette, Moon, Clock } from "lucide-react"

export default function VibePersonas() {
  const personas = [
    {
      icon: <Music className="h-8 w-8" />,
      name: "The Explorer",
      motto: "Play me something I've never heard before",
      color: "from-[#0DCCFF] to-[#1ED760]",
      description:
        "Constantly seeking new artists, genres, and sounds. They value discovery and musical adventure above all else.",
      traits: ["Genre-hopping", "Playlist sharing", "Early adopter", "Curious listener"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      name: "The Amplifier",
      motto: "Turn it up until I feel it",
      color: "from-[#FF6437] to-[#FF36A8]",
      description:
        "Bass-heavy tracks, high energy, often repeat-listening favorite drops. They use music as fuel for energy and motivation.",
      traits: ["Bass enthusiast", "Workout playlists", "Concert-goer", "Energy seeker"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      name: "The Curator",
      motto: "Every moment deserves its perfect soundtrack",
      color: "from-[#9C42F5] to-[#FF36A8]",
      description:
        "Carefully crafted playlists, mood-based listening. They take pride in creating the perfect collection for every occasion.",
      traits: ["Playlist perfectionist", "Mood matcher", "Tastemaker", "Detail-oriented"],
    },
    {
      icon: <Moon className="h-8 w-8" />,
      name: "The Immersive",
      motto: "Music is my escape",
      color: "from-[#121212] to-[#1ED760]",
      description:
        "Long sessions, full albums, ambient and atmospheric sounds. They use music as a portal to another world.",
      traits: ["Deep listener", "Spatial audio fan", "Album appreciator", "Focused sessions"],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      name: "The Nostalgist",
      motto: "Take me back to that moment",
      color: "from-[#FF6437] to-[#9C42F5]",
      description:
        "Revisiting personal classics, era-specific playlists. Music is their time machine to meaningful memories.",
      traits: ["Memory collector", "Era enthusiast", "Emotional connector", "Repeat listener"],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Vibe Persona System</h2>
        <p className="text-gray-400">
          Moving beyond demographics to understand users through their emotional connection to music
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {personas.map((persona, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className={`bg-gradient-to-r ${persona.color} p-6 flex items-center justify-between`}>
              <div>
                <h3 className="text-xl font-bold">{persona.name}</h3>
                <p className="text-sm italic mt-1">"{persona.motto}"</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">{persona.icon}</div>
            </div>
            <div className="p-4">
              <p className="text-sm mb-4">{persona.description}</p>
              <div className="flex flex-wrap gap-2">
                {persona.traits.map((trait, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-700 rounded-full text-xs">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Persona-Based Design</h3>
        <p className="mb-6">Our vibe personas inform product decisions, content curation, and marketing strategies:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-700 p-4 rounded-lg">
            <h4 className="font-bold mb-2">UI Preferences</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#0DCCFF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Explorers need discovery-forward interfaces with detailed artist information</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FF6437] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Amplifiers prefer visualizers, bass boosters, and energy indicators</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#9C42F5] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Curators value organizational tools, detailed metadata, and sharing capabilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-700 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Content Strategy</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#1ED760] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Immersives engage with spatial audio, background stories, and seamless transitions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FF36A8] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Nostalgists connect with time capsules, memory features, and contextual history</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>All personas benefit from personalized recommendations based on their listening patterns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
