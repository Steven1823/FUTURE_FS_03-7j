export default function Typography() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Typography</h2>
        <p className="text-gray-400">A balanced type system that captures both energy and clarity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-[#1ED760]">FREQUENCY</h3>
          <p className="text-sm text-gray-400 mb-6">
            Display font with custom cuts that suggest sound waves. Used for headlines and large text elements.
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 mb-1">Light</p>
              <p className="text-2xl" style={{ fontWeight: 300 }}>
                The rhythm of your life
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Regular</p>
              <p className="text-2xl">The rhythm of your life</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Medium</p>
              <p className="text-2xl font-medium">The rhythm of your life</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Bold</p>
              <p className="text-2xl font-bold">THE RHYTHM OF YOUR LIFE</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Black</p>
              <p className="text-2xl font-black tracking-tight">THE RHYTHM OF YOUR LIFE</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-[#1ED760]">Pulse Sans</h3>
          <p className="text-sm text-gray-400 mb-6">
            Clean, highly readable sans-serif with slightly rounded terminals. Used for UI elements and body text.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Light</p>
              <p className="text-lg font-light">Music is the universal language that needs no translation.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Regular</p>
              <p className="text-lg">Music is the universal language that needs no translation.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Medium</p>
              <p className="text-lg font-medium">Music is the universal language that needs no translation.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Bold</p>
              <p className="text-lg font-bold">Music is the universal language that needs no translation.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-6 text-[#1ED760]">Typography in Action</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#121212] to-[#121212] p-6 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm uppercase tracking-wider text-gray-400">Now Trending</span>
              <h3 className="text-5xl font-black mt-2 mb-1 tracking-tight leading-none">NEW MUSIC FRIDAY</h3>
              <p className="text-gray-300">Fresh sounds for your weekend.</p>
              <button className="mt-4 bg-[#1ED760] text-black font-bold py-2 px-4 rounded-full text-sm">
                PLAY NOW
              </button>
            </div>
            <div
              className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-[#1ED760]/20 to-[#0DCCFF]/20 rounded-full blur-2xl -mr-12 -mb-12"
              style={{ transformOrigin: "center" }}
            ></div>
          </div>

          <div className="bg-[#121212] p-6 rounded-lg">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#1ED760]">Weekly Discovery</span>
              <h3 className="text-2xl font-bold mt-1 mb-2">Made For You</h3>
              <p className="text-sm text-gray-400">
                Your personal soundtrack, curated based on your unique taste and listening habits.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 rounded bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-zinc-700 rounded mr-3"></div>
                  <div>
                    <p className="font-medium">High Hopes</p>
                    <p className="text-xs text-gray-400">Panic! At The Disco</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">3:10</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-zinc-700 rounded mr-3"></div>
                  <div>
                    <p className="font-medium">bad guy</p>
                    <p className="text-xs text-gray-400">Billie Eilish</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">3:14</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Typography Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Hierarchy</h4>
            <p>
              Maintain clear hierarchy using size, weight, and spacing. Headlines in FREQUENCY, body text in Pulse Sans.
            </p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Accessibility</h4>
            <p>Ensure text remains readable across devices with appropriate contrast and sizing.</p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2">Expression</h4>
            <p>
              Use typography to express mood and energy - larger, bolder text for high energy content, lighter weights
              for calm.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Special Typography Treatments</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="font-bold mb-4">Gradient Text</h4>
            <p className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1ED760] to-[#0DCCFF]">
              YOUR SOUND. YOUR STORY.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="font-bold mb-4">Dynamic Spacing</h4>
            <p className="text-3xl md:text-4xl font-bold tracking-widest">
              P U L S E <span className="text-[#1ED760]">+</span> P L A Y
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
