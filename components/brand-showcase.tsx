"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from "lucide-react"
import ColorPalette from "./brand/color-palette"
import Typography from "./brand/typography"
import Manifesto from "./brand/manifesto"
import VibePersonas from "./brand/vibe-personas"
import MobileApp from "./app/mobile-app"
import SocialMedia from "./social/social-media"
import Merchandise from "./merch/merchandise"

export default function BrandShowcase() {
  const [activeTab, setActiveTab] = useState("logo")

  const tabs = [
    { id: "logo", label: "Logo & Identity" },
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "app", label: "Mobile UI" },
    { id: "social", label: "Social" },
    { id: "personas", label: "Vibe Personas" },
    { id: "manifesto", label: "Manifesto" },
    { id: "merch", label: "Merchandise" },
  ]

  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % tabs.length
    setActiveTab(tabs[nextIndex].id)
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length
    setActiveTab(tabs[prevIndex].id)
  }

  return (
    <section className="min-h-screen bg-[#121212] text-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1ED760] to-[#0DCCFF]">
              SPOTIFY PULSE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Your Sound. Your Story.</p>
        </div>

        <div className="relative">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-zinc-900">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="data-[state=active]:bg-[#1ED760] data-[state=active]:text-black"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <TabsContent value="logo" className="mt-0">
                  <div className="text-center p-8">
                    <h2 className="text-3xl font-bold mb-4">Brand Identity</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      A dynamic identity system that responds to sound and movement, creating a personalized experience
                      for every user.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="colors" className="mt-0">
                  <ColorPalette />
                </TabsContent>

                <TabsContent value="typography" className="mt-0">
                  <Typography />
                </TabsContent>

                <TabsContent value="app" className="mt-0">
                  <MobileApp />
                </TabsContent>

                <TabsContent value="social" className="mt-0">
                  <SocialMedia />
                </TabsContent>

                <TabsContent value="personas" className="mt-0">
                  <VibePersonas />
                </TabsContent>

                <TabsContent value="manifesto" className="mt-0">
                  <Manifesto />
                </TabsContent>

                <TabsContent value="merch" className="mt-0">
                  <Merchandise />
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
