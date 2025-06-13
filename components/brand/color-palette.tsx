export default function ColorPalette() {
  const colors = [
    {
      name: "Pulse Green",
      hex: "#1ED760",
      rgb: "30, 215, 96",
      description: "Primary brand color, evolved from the original Spotify green",
    },
    {
      name: "Midnight",
      hex: "#121212",
      rgb: "18, 18, 18",
      description: "Deep background color for immersive listening experiences",
    },
    {
      name: "Sonic Silver",
      hex: "#F0F0F0",
      rgb: "240, 240, 240",
      description: "Clean, neutral for text and UI elements",
    },
    {
      name: "Echo Purple",
      hex: "#9C42F5",
      rgb: "156, 66, 245",
      description: "For energy, creativity, and night vibes",
    },
    {
      name: "Bass Orange",
      hex: "#FF6437",
      rgb: "255, 100, 55",
      description: "For warmth, passion, and bold statements",
    },
    {
      name: "Chill Blue",
      hex: "#0DCCFF",
      rgb: "13, 204, 255",
      description: "For calm, focus, and electronic genres",
    },
    {
      name: "Vibe Pink",
      hex: "#FF36A8",
      rgb: "255, 54, 168",
      description: "For intensity, emotion, and pop culture",
    },
  ]

  const gradients = [
    {
      name: "Sunset Flow",
      from: "#9C42F5",
      to: "#FF6437",
      description: "For energetic, creative content",
    },
    {
      name: "Northern Beats",
      from: "#0DCCFF",
      to: "#1ED760",
      description: "For calm, focused content",
    },
    {
      name: "Night Session",
      from: "#121212",
      to: "#9C42F5",
      description: "For immersive, nighttime experiences",
    },
    {
      name: "Heat Wave",
      from: "#FF6437",
      to: "#FF36A8",
      description: "For intense, passionate content",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Color Palette</h2>
        <p className="text-gray-400">
          A vibrant, emotive system that responds to music genres, moods, and energy levels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {colors.map((color, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="h-32" style={{ backgroundColor: color.hex }}></div>
            <div className="p-4">
              <h3 className="font-bold mb-1">{color.name}</h3>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{color.hex}</span>
                <span>RGB: {color.rgb}</span>
              </div>
              <p className="text-sm">{color.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Gradient System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gradients.map((gradient, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
              <div
                className="h-32 flex items-end p-4"
                style={{ backgroundImage: `linear-gradient(to right, ${gradient.from}, ${gradient.to})` }}
              >
                <h4 className="font-bold text-white drop-shadow-md">{gradient.name}</h4>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{gradient.from}</span>
                  <span>{gradient.to}</span>
                </div>
                <p className="text-sm">{gradient.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Color Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-4 h-4 bg-[#1ED760] rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p>Pulse Green is the primary brand color, used for CTAs, the logo, and key UI elements</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-[#121212] rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p>Midnight creates the foundation for immersive, focused listening experiences</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-[#F0F0F0] rounded-full mt-1 mr-2 flex-shrink-0 border border-zinc-600"></div>
              <p>Sonic Silver provides contrast for text and UI elements in dark environments</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full mt-1 mr-2 flex-shrink-0 bg-gradient-to-r from-[#9C42F5] to-[#FF6437]"></div>
              <p>Accent colors express different moods, genres, and energy levels across the platform</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full mt-1 mr-2 flex-shrink-0 bg-gradient-to-r from-[#1ED760] to-[#0DCCFF]"></div>
              <p>Gradients create depth and emotion, adapting to content and user preferences</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full mt-1 mr-2 flex-shrink-0 border border-[#1ED760]"></div>
              <p>Color accessibility remains a priority across all applications and contexts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Vibe-Based Color System</h3>
        <p className="mb-6">Colors respond to music genres, moods, and energy levels:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-[#0DCCFF] to-[#1ED760] p-1 rounded-lg">
            <div className="bg-zinc-800 p-4 rounded-md h-full">
              <h4 className="font-bold mb-2">Chill & Focus</h4>
              <p className="text-sm">
                Blues and greens create a calm, focused atmosphere for studying, working, or unwinding
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#9C42F5] to-[#FF36A8] p-1 rounded-lg">
            <div className="bg-zinc-800 p-4 rounded-md h-full">
              <h4 className="font-bold mb-2">Energy & Creativity</h4>
              <p className="text-sm">Purples and pinks express high energy, creativity, and emotional intensity</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF6437] to-[#FF36A8] p-1 rounded-lg">
            <div className="bg-zinc-800 p-4 rounded-md h-full">
              <h4 className="font-bold mb-2">Passion & Intensity</h4>
              <p className="text-sm">Oranges and reds convey warmth, passion, and high-intensity experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
