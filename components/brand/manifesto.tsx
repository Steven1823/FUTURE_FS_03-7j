"use client"

import { useState, useEffect } from "react"

const lines = [
  "We believe that every moment has its melody.",
  "Every memory, its rhythm.",
  "Every feeling, its frequency.",
  "We are not just a platform.",
  "We are the soundtrack to your life's journey.",
  "From subway commutes to sunset road trips.",
  "From first dates to final goodbyes.",
  "From workout highs to late-night lows.",
  "Music is the universal language that needs no translation.",
  "The invisible force that moves us all.",
  "The timeless connection between souls across time and space.",
  "We don't just stream songs.",
  "We deliver emotions.",
  "We preserve memories.",
  "We spark discoveries.",
  "We fuel movements.",
  "In a world that never stops moving,",
  "we help you find your rhythm.",
  "In a sea of noise,",
  "we help you find your signal.",
  "Your sound is unique.",
  "Your story is yours alone.",
  "But when shared, they become part of something bigger.",
  "A global pulse of human experience, expressed through audio.",
  "Your Sound. Your Story.",
  "SPOTIFY PULSE",
]

export default function Manifesto() {
  const [currentLine, setCurrentLine] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Brand Manifesto</h2>
        <p className="text-gray-400">"THE RHYTHM OF LIFE"</p>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#1ED760]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#9C42F5]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="h-48 md:h-64 flex items-center justify-center">
            <p className="text-xl md:text-3xl font-medium text-center animate-fade-in max-w-3xl">
              {lines[currentLine]}
            </p>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-wrap justify-center gap-1 mb-4 max-w-md">
              {lines.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentLine ? "bg-[#1ED760]" : "bg-zinc-600"
                  } transition-colors`}
                  onClick={() => {
                    setCurrentLine(index)
                    setAutoplay(false)
                  }}
                ></button>
              ))}
            </div>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                autoplay
                  ? "bg-[#1ED760] text-black font-medium"
                  : "bg-zinc-700 text-white hover:bg-zinc-600 transition-colors"
              }`}
              onClick={() => setAutoplay(!autoplay)}
            >
              {autoplay ? "Autoplay On" : "Autoplay Off"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#1ED760]">Brand Voice</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Authentic</h4>
                <p className="text-sm mt-1">We speak honestly about the real impact of music in people's lives.</p>
              </div>
              <div>
                <h4 className="font-bold">Inclusive</h4>
                <p className="text-sm mt-1">We celebrate diversity of sound, culture, and expression.</p>
              </div>
              <div>
                <h4 className="font-bold">Passionate</h4>
                <p className="text-sm mt-1">We communicate with genuine enthusiasm about the power of audio.</p>
              </div>
              <div>
                <h4 className="font-bold">Conversational</h4>
                <p className="text-sm mt-1">
                  We speak directly to our audience as fellow music lovers, not as a faceless corporation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#1ED760]">Key Brand Phrases</h3>
            <div className="space-y-3">
              <div className="p-3 bg-zinc-700 rounded-md">
                <p className="text-sm font-medium">"Your Sound. Your Story."</p>
                <p className="text-xs text-gray-400 mt-1">
                  Our tagline connects personal identity with musical expression.
                </p>
              </div>
              <div className="p-3 bg-zinc-700 rounded-md">
                <p className="text-sm font-medium">"Find your pulse."</p>
                <p className="text-xs text-gray-400 mt-1">Call to action for discovering your unique rhythm.</p>
              </div>
              <div className="p-3 bg-zinc-700 rounded-md">
                <p className="text-sm font-medium">"Sound moves us."</p>
                <p className="text-xs text-gray-400 mt-1">
                  Emphasizes the emotional and physical impact of music and audio.
                </p>
              </div>
              <div className="p-3 bg-zinc-700 rounded-md">
                <p className="text-sm font-medium">"Every moment has its soundtrack."</p>
                <p className="text-xs text-gray-400 mt-1">
                  Connects music to life experiences and everyday moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Core Brand Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2 text-[#1ED760]">Connection</h4>
            <p>Building bridges between people, cultures, and experiences through sound.</p>
          </div>
          <div className="p-4 bg-zinc-700 rounded-lg">
            <h4 className="font-bold mb-2 text-[#9C42F5]">Discovery\
