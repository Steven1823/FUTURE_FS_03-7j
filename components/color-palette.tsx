export default function ColorPalette() {
  const colors = [
    {
      name: "Spotify Green",
      hex: "#1DB954",
      rgb: "29, 185, 84",
      description: "Primary brand color, slightly more vibrant than the original",
    },
    {
      name: "Cosmic Black",
      hex: "#121212",
      rgb: "18, 18, 18",
      description: "Deep background color for immersive experiences",
    },
    {
      name: "Sonic Purple",
      hex: "#9C42F5",
      rgb: "156, 66, 245",
      description: "For energy and creativity",
    },
    {
      name: "Pulse Blue",
      hex: "#2E77D0",
      rgb: "46, 119, 208",
      description: "For calm and focus",
    },
    {
      name: "Beat Orange",
      hex: "#FF6437",
      rgb: "255, 100, 55",
      description: "For warmth and excitement",
    },
    {
      name: "Echo Pink",
      hex: "#FF4088",
      rgb: "255, 64, 136",
      description: "For passion and emotion",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Color Palette</h2>
        <p className="text-gray-400">A vibrant, expressive palette that adapts to different moods and genres</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <h3 className="text-xl font-bold mb-4">Gradient Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-[#1DB954] to-[#9C42F5]"></div>
            <p className="mt-2 text-sm text-center">Green to Purple</p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-[#FF4088] to-[#FF6437]"></div>
            <p className="mt-2 text-sm text-center">Pink to Orange</p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-[#2E77D0] to-[#1DB954]"></div>
            <p className="mt-2 text-sm text-center">Blue to Green</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Color Usage Guidelines</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <span className="w-4 h-4 bg-[#1DB954] rounded-full mt-1 mr-2 flex-shrink-0"></span>
            <span>Primary green should be used for CTAs, logo, and primary brand elements</span>
          </li>
          <li className="flex items-start">
            <span className="w-4 h-4 bg-[#121212] rounded-full mt-1 mr-2 flex-shrink-0"></span>
            <span>Cosmic black serves as the foundation for immersive listening experiences</span>
          </li>
          <li className="flex items-start">
            <span className="w-4 h-4 bg-[#9C42F5] rounded-full mt-1 mr-2 flex-shrink-0"></span>
            <span>Accent colors should be used to represent different moods, genres, and energy levels</span>
          </li>
          <li className="flex items-start">
            <span className="w-4 h-4 bg-gradient-to-r from-[#1DB954] to-[#9C42F5] rounded-full mt-1 mr-2 flex-shrink-0"></span>
            <span>Gradients can be used for featured content, mood-based playlists, and special campaigns</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
