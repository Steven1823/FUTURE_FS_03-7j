export default function Typography() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Typography</h2>
        <p className="text-gray-400">A type system that balances clarity with personality</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-[#1DB954]">Primary Font: Circular Spectrum</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Light</p>
              <p className="text-2xl font-light">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Regular</p>
              <p className="text-2xl">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Medium</p>
              <p className="text-2xl font-medium">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Bold</p>
              <p className="text-2xl font-bold">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Black</p>
              <p className="text-2xl font-black">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-[#1DB954]">Secondary Font: Waveform Sans</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Light</p>
              <p className="text-lg font-light">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Regular</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Medium</p>
              <p className="text-lg font-medium">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Bold</p>
              <p className="text-lg font-bold">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-[#1DB954]">Display Font: Rhythm Display</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-400 mb-1">Regular</p>
            <p className="text-4xl md:text-5xl font-bold tracking-tight">SOUND YOUR WORLD</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">With Gradient</p>
            <p className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1DB954] to-[#9C42F5]">
              SOUND YOUR WORLD
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Typography in Use</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-gray-400">Playlist</span>
              <h3 className="text-3xl font-bold mt-1">Today's Top Hits</h3>
              <p className="text-gray-400 mt-1">The hottest tracks in the world right now</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Blinding Lights</p>
                  <p className="text-sm text-gray-400">The Weeknd</p>
                </div>
                <span className="text-sm text-gray-400">3:20</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">As It Was</p>
                  <p className="text-sm text-gray-400">Harry Styles</p>
                </div>
                <span className="text-sm text-gray-400">2:47</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Heat Waves</p>
                  <p className="text-sm text-gray-400">Glass Animals</p>
                </div>
                <span className="text-sm text-gray-400">3:59</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#121212] to-[#1DB954]/20 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-300">New Album</span>
              <h3 className="text-4xl font-bold mt-1">Renaissance</h3>
              <p className="text-xl mt-1">Beyoncé</p>
            </div>
            <div className="mt-8">
              <button className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full">Listen Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
