import Image from "next/image"

export default function Merchandise() {
  const merchCategories = [
    {
      category: "Apparel",
      items: [
        {
          name: "Waveform Tee",
          description: "Black tee with sound wave visualization in gradient colors",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Pulse Hoodie",
          description: "Oversized hoodie with reflective logo that changes appearance under different lights",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Genre Caps",
          description: "Series of hats with minimal embroidery representing different music genres",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
    {
      category: "Accessories",
      items: [
        {
          name: "Sonic Tote",
          description: "Canvas tote with abstract sound visualization that looks like moving when walking",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Frequency Stickers",
          description: "Sheet of die-cut stickers featuring app UI elements and sound waves",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Pulse Water Bottle",
          description: "Matte black with gradient sound wave pattern that reveals when cold",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Merchandise Collection</h2>
        <p className="text-gray-400">"PULSE DROP" - Limited edition merch that brings the brand to life</p>
      </div>

      {merchCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mt-12">
          <h3 className="text-xl font-bold mb-6">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-zinc-800 rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Design Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-4 h-4 bg-[#1ED760] rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p className="text-sm">Monochromatic base with strategic pops of accent colors</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-zinc-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p className="text-sm">Subtle branding that music enthusiasts would recognize</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-zinc-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p className="text-sm">Focus on quality materials that age well</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-4 h-4 bg-zinc-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p className="text-sm">Design elements that reference UI/UX from the app</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-zinc-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p className="text-sm">Limited edition drops that align with cultural moments in music</p>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-[#9C42F5] rounded-full mt-1 mr-2 flex-shrink-0"></div>
              <p className="text-sm">Collaborations with emerging artists and designers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-br from-zinc-900 to-black p-6 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#1ED760]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#9C42F5]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          <h3 className="text-xl font-bold mb-4">Featured Collection: Sound Wave Series</h3>
          <p className="mb-6">
            Limited edition apparel featuring unique sound wave patterns generated from iconic songs across genres.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="h-2 bg-[#1ED760] rounded-full mb-2"></div>
              <h4 className="font-bold text-sm">Hip-Hop Wave</h4>
              <p className="text-xs text-gray-400">Sound pattern from iconic beats</p>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="h-2 bg-[#9C42F5] rounded-full mb-2"></div>
              <h4 className="font-bold text-sm">Electronic Pulse</h4>
              <p className="text-xs text-gray-400">Visualizations from electronic classics</p>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="h-2 bg-[#FF36A8] rounded-full mb-2"></div>
              <h4 className="font-bold text-sm">Rock Frequency</h4>
              <p className="text-xs text-gray-400">Patterns from legendary guitar solos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
