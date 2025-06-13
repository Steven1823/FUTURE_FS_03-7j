"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define available moods
export type Mood = "default" | "energetic" | "chill" | "focus" | "nostalgic" | "melancholy"

// Define the context type
type MoodContextType = {
  currentMood: Mood
  setMood: (mood: Mood) => void
  moodColors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  moodGradient: string
}

// Default mood colors
const moodColorMap = {
  default: {
    primary: "#1ED760",
    secondary: "#121212",
    accent: "#1DB954",
    background: "#121212",
    text: "#FFFFFF",
    gradient: "bg-gradient-to-r from-[#1ED760] to-[#1DB954]",
  },
  energetic: {
    primary: "#FF4081",
    secondary: "#FF9B3D",
    accent: "#FFDF3D",
    background: "#2D1428",
    text: "#FFFFFF",
    gradient: "bg-gradient-energetic",
  },
  chill: {
    primary: "#0DCCFF",
    secondary: "#1ED760",
    accent: "#4EEAFF",
    background: "#0A2A3B",
    text: "#FFFFFF",
    gradient: "bg-gradient-chill",
  },
  focus: {
    primary: "#9C42F5",
    secondary: "#0DCCFF",
    accent: "#B388FF",
    background: "#1A1033",
    text: "#FFFFFF",
    gradient: "bg-gradient-focus",
  },
  nostalgic: {
    primary: "#FF6437",
    secondary: "#9C42F5",
    accent: "#FFB196",
    background: "#2B1A14",
    text: "#FFFFFF",
    gradient: "bg-gradient-nostalgic",
  },
  melancholy: {
    primary: "#5E81AC",
    secondary: "#81A1C1",
    accent: "#A3BE8C",
    background: "#2E3440",
    text: "#ECEFF4",
    gradient: "bg-gradient-melancholy",
  },
}

// Create the context with default values
const MoodContext = createContext<MoodContextType>({
  currentMood: "default",
  setMood: () => {},
  moodColors: moodColorMap.default,
  moodGradient: moodColorMap.default.gradient,
})

// Custom hook to use the mood context
export const useMood = () => useContext(MoodContext)

// Provider component
export function MoodProvider({ children }: { children: ReactNode }) {
  const [currentMood, setCurrentMood] = useState<Mood>("default")
  const [moodColors, setMoodColors] = useState(moodColorMap.default)
  const [moodGradient, setMoodGradient] = useState(moodColorMap.default.gradient)

  // Update the document class and colors when mood changes
  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove(
      "theme-default",
      "theme-energetic",
      "theme-chill",
      "theme-focus",
      "theme-nostalgic",
      "theme-melancholy",
    )

    // Add the current theme class
    document.documentElement.classList.add(`theme-${currentMood}`)

    // Update colors
    setMoodColors(moodColorMap[currentMood])
    setMoodGradient(moodColorMap[currentMood].gradient)

    // Save to localStorage
    localStorage.setItem("spotify-mood", currentMood)
  }, [currentMood])

  // Load saved mood from localStorage on initial render
  useEffect(() => {
    const savedMood = localStorage.getItem("spotify-mood") as Mood | null
    if (savedMood && Object.keys(moodColorMap).includes(savedMood)) {
      setCurrentMood(savedMood)
    }
  }, [])

  // Set mood function
  const setMood = (mood: Mood) => {
    setCurrentMood(mood)
  }

  return (
    <MoodContext.Provider value={{ currentMood, setMood, moodColors, moodGradient }}>{children}</MoodContext.Provider>
  )
}
