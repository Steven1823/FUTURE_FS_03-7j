"use client"

import { useState, useEffect } from "react"

export default function Manifesto() {
  const [currentLine, setCurrentLine] = useState(0)
  const lines = [
    "Every moment has its melody.",
    "Every memory, its rhythm.",
    "Every connection, its harmony.",
    "We believe sound shapes who we are and who we become.",
    "It's the universal language that needs no translation,",
    "The invisible force that moves us all.",
    "We don't just stream music.",
    "We stream emotion.",
    "We stream culture.",
    "We stream the soundtrack of humanity.",
    "In a world of noise, we help you find your signal.",
    "In a sea of sounds, we help you discover your wave.",
    "In the universe of audio, we help you chart your own constellation.",
    "Your journey is unique.",
    "Your sound should be too.",
    "Sound Your World.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [lines.length])

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Brand Manifesto</h2>
        <p className="text-gray-400">"The Soundtrack of Life"</p>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#1DB954]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#9C42F5]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="h-64 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-medium text-center animate-fade-in">{lines[currentLine]}</p>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {lines.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentLine ? "bg-[#1DB954]" : "bg-zinc-600"}`}
                  onClick={() => setCurrentLine(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#1DB954]">Manifesto in Full</h3>
            <div className="space-y-4">
              {lines.map((line, index) => (
                <p key={index} className="text-sm md:text-base">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#1DB954]">Brand Voice</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Authentic</h4>
                <p className="text-sm mt-1">
                  We speak with honesty and transparency, acknowledging the power of music in people's lives.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Inclusive</h4>
                <p className="text-sm mt-1">
                  We celebrate diversity in music and culture, making space for all voices and sounds.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Passionate</h4>
                <p className="text-sm mt-1">
                  We communicate with enthusiasm about the transformative power of music and audio.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Personal</h4>
                <p className="text-sm mt-1">
                  We recognize each listener's unique relationship with music and speak directly to their experience.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Forward-thinking</h4>
                <p className="text-sm mt-1">
                  We embrace innovation and the future of audio while honoring music's timeless nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
