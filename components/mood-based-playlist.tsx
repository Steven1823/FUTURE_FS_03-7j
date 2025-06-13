"use client"

import { useState } from "react"
import Image from "next/image"
import { useMood } from "./mood-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause } from "lucide-react"

interface PlaylistProps {
  title: string
  description: string
  coverUrl: string
  tracks: number
}

export default function MoodBasedPlaylist({ title, description, coverUrl, tracks }: PlaylistProps) {
  const { currentMood, moodColors } = useMood()
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Get mood-specific styling
  const getMoodStyling = () => {
    switch (currentMood) {
      case "energetic":
        return {
          hoverEffect: "scale-105 rotate-2",
          overlayColor: "rgba(255, 64, 129, 0.3)",
          iconBg: "#FF4081",
        }
      case "chill":
        return {
          hoverEffect: "scale-102",
          overlayColor: "rgba(13, 204, 255, 0.2)",
          iconBg: "#0DCCFF",
        }
      case "focus":
        return {
          hoverEffect: "scale-103",
          overlayColor: "rgba(156, 66, 245, 0.25)",
          iconBg: "#9C42F5",
        }
      case "nostalgic":
        return {
          hoverEffect: "scale-104 rotate-1",
          overlayColor: "rgba(255, 100, 55, 0.3)",
          iconBg: "#FF6437",
        }
      case "melancholy":
        return {
          hoverEffect: "scale-101",
          overlayColor: "rgba(94, 129, 172, 0.3)",
          iconBg: "#5E81AC",
        }
      default:
        return {
          hoverEffect: "scale-105",
          overlayColor: "rgba(30, 215, 96, 0.2)",
          iconBg: "#1ED760",
        }
    }
  }

  const { hoverEffect, overlayColor, iconBg } = getMoodStyling()

  return (
    <Card
      className="overflow-hidden transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={coverUrl || "/placeholder.svg?height=300&width=300"}
            alt={title}
            width={300}
            height={300}
            className={`object-cover transition-transform duration-500 ${isHovered ? hoverEffect : ""}`}
          />
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            style={{ backgroundColor: overlayColor }}
          />

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
            style={{ backgroundColor: iconBg }}
          >
            {isPlaying ? <Pause className="h-5 w-5 text-black" /> : <Play className="h-5 w-5 text-black" />}
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-bold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground mt-2">{tracks} tracks</p>
        </div>
      </CardContent>
    </Card>
  )
}
