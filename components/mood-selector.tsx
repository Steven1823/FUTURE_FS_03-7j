"use client"

import { useState } from "react"
import { useMood } from "./mood-provider"
import { Button } from "@/components/ui/button"
import { Flame, Waves, Brain, Clock, Cloud, Check } from "lucide-react"

export default function MoodSelector() {
  const { currentMood, setMood } = useMood()
  const [isOpen, setIsOpen] = useState(false)

  const moods = [
    { id: "default", name: "Default", icon: <Check size={18} /> },
    { id: "energetic", name: "Energetic", icon: <Flame size={18} /> },
    { id: "chill", name: "Chill", icon: <Waves size={18} /> },
    { id: "focus", name: "Focus", icon: <Brain size={18} /> },
    { id: "nostalgic", name: "Nostalgic", icon: <Clock size={18} /> },
    { id: "melancholy", name: "Melancholy", icon: <Cloud size={18} /> },
  ]

  const handleMoodChange = (moodId) => {
    setMood(moodId)
    setIsOpen(false)
  }

  const currentMoodObj = moods.find((m) => m.id === currentMood)

  return (
    <div className="relative">
      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Current mood:</span>
        {currentMoodObj?.icon}
        <span>{currentMoodObj?.name}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background border border-border rounded-md shadow-lg z-50 w-48">
          <div className="p-2">
            <p className="text-xs text-muted-foreground mb-2 px-2">Select Mood</p>
            {moods.map((mood) => (
              <button
                key={mood.id}
                className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 ${
                  currentMood === mood.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
                onClick={() => handleMoodChange(mood.id)}
              >
                {mood.icon}
                <span>{mood.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
