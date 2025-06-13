"use client"

import { useState } from "react"
import { useMood } from "./mood-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import MoodSelector from "./mood-selector"

export default function ColorSystemShowcase() {
  const { currentMood, moodColors, moodGradient } = useMood()
  const [showCode, setShowCode] = useState(false)

  const colorPalettes = {
    default: [
      { name: "Spotify Green", hex: "#1ED760", rgb: "30, 215, 96", description: "Primary brand color" },
      { name: "Spotify Black", hex: "#121212", rgb: "18, 18, 18", description: "Background color" },
      { name: "Spotify White", hex: "#FFFFFF", rgb: "255, 255, 255", description: "Text color" },
      { name: "Spotify Gray", hex: "#B3B3B3", rgb: "179, 179, 179", description: "Secondary text" },
    ],
    energetic: [
      { name: "Vibrant Pink", hex: "#FF4081", rgb: "255, 64, 129", description: "Primary color" },
      { name: "Warm Orange", hex: "#FF9B3D", rgb: "255, 155, 61", description: "Secondary color" },
      { name: "Bright Yellow", hex: "#FFDF3D", rgb: "255, 223, 61", description: "Accent color" },
      { name: "Deep Magenta", hex: "#2D1428", rgb: "45, 20, 40", description: "Background color" },
    ],
    chill: [
      { name: "Soft Blue", hex: "#0DCCFF", rgb: "13, 204, 255", description: "Primary color" },
      { name: "Spotify Green", hex: "#1ED760", rgb: "30, 215, 96", description: "Secondary color" },
      { name: "Light Cyan", hex: "#4EEAFF", rgb: "78, 234, 255", description: "Accent color" },
      { name: "Deep Blue", hex: "#0A2A3B", rgb: "10, 42, 59", description: "Background color" },
    ],
    focus: [
      { name: "Purple", hex: "#9C42F5", rgb: "156, 66, 245", description: "Primary color" },
      { name: "Blue", hex: "#0DCCFF", rgb: "13, 204, 255", description: "Secondary color" },
      { name: "Light Purple", hex: "#B388FF", rgb: "179, 136, 255", description: "Accent color" },
      { name: "Deep Purple", hex: "#1A1033", rgb: "26, 16, 51", description: "Background color" },
    ],
    nostalgic: [
      { name: "Warm Orange", hex: "#FF6437", rgb: "255, 100, 55", description: "Primary color" },
      { name: "Purple", hex: "#9C42F5", rgb: "156, 66, 245", description: "Secondary color" },
      { name: "Light Peach", hex: "#FFB196", rgb: "255, 177, 150", description: "Accent color" },
      { name: "Warm Dark", hex: "#2B1A14", rgb: "43, 26, 20", description: "Background color" },
    ],
    melancholy: [
      { name: "Muted Blue", hex: "#5E81AC", rgb: "94, 129, 172", description: "Primary color" },
      { name: "Light Blue", hex: "#81A1C1", rgb: "129, 161, 193", description: "Secondary color" },
      { name: "Sage Green", hex: "#A3BE8C", rgb: "163, 190, 140", description: "Accent color" },
      { name: "Dark Slate", hex: "#2E3440", rgb: "46, 52, 64", description: "Background color" },
    ],
  }

  const currentPalette = colorPalettes[currentMood] || colorPalettes.default

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Spotify Pulse: Mood-Based Color System</h1>
          <p className="text-muted-foreground">
            A dynamic color system that adapts to different music moods and enhances emotional connection.
          </p>
        </div>
        <MoodSelector />
      </div>

      <Tabs defaultValue="palette" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="palette">Color Palette</TabsTrigger>
          <TabsTrigger value="components">UI Components</TabsTrigger>
          <TabsTrigger value="gradients">Gradients</TabsTrigger>
        </TabsList>

        <TabsContent value="palette" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPalette.map((color, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-32" style={{ backgroundColor: color.hex }}></div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1">{color.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{color.hex}</span>
                    <span>RGB: {color.rgb}</span>
                  </div>
                  <p className="text-sm">{color.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Primary Color</h4>
                  <p className="text-sm">Use for main CTAs, active states, and brand elements</p>
                  <div className="h-8 rounded-md" style={{ backgroundColor: moodColors.primary }}></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Secondary Color</h4>
                  <p className="text-sm">Use for secondary actions, highlights, and accents</p>
                  <div className="h-8 rounded-md" style={{ backgroundColor: moodColors.secondary }}></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Accent Color</h4>
                  <p className="text-sm">Use sparingly for emphasis and decorative elements</p>
                  <div className="h-8 rounded-md" style={{ backgroundColor: moodColors.accent }}></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Background Color</h4>
                  <p className="text-sm">Use for page backgrounds and containers</p>
                  <div className="h-8 rounded-md" style={{ backgroundColor: moodColors.background }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text & Typography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h1 className="text-2xl font-bold">Heading 1</h1>
                <h2 className="text-xl font-bold">Heading 2</h2>
                <p className="text-base">Regular paragraph text</p>
                <p className="text-sm text-muted-foreground">Secondary text</p>
                <p className={`text-xl font-bold ${moodGradient.replace("bg-", "gradient-text-")}`}>Gradient Text</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cards & Containers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-md mb-4">
                  <p className="font-medium">Muted Container</p>
                  <p className="text-sm text-muted-foreground">Secondary information</p>
                </div>
                <div className="p-4 border rounded-md">
                  <p className="font-medium">Bordered Container</p>
                  <p className="text-sm text-muted-foreground">Secondary information</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audio Visualizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-center justify-center">
                  <div className="flex items-end h-20">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="audio-bar h-8"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          backgroundColor: moodColors.primary,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gradients" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Gradient</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`h-32 rounded-md ${moodGradient}`}></div>
                <div className="mt-4">
                  <Button onClick={() => setShowCode(!showCode)} variant="outline" size="sm">
                    {showCode ? "Hide Code" : "Show Code"}
                  </Button>

                  {showCode && (
                    <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto text-xs">
                      <code>{`<div className="${moodGradient}"></div>`}</code>
                    </pre>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gradient Text</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className={`text-3xl font-bold ${moodGradient.replace("bg-", "gradient-text-")}`}>
                  Your Sound. Your Story.
                </h2>

                <div className="mt-4">
                  <Button onClick={() => setShowCode(!showCode)} variant="outline" size="sm">
                    {showCode ? "Hide Code" : "Show Code"}
                  </Button>

                  {showCode && (
                    <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto text-xs">
                      <code>{`<h2 className="${moodGradient.replace("bg-", "gradient-text-")}">
  Your Sound. Your Story.
</h2>`}</code>
                    </pre>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>All Mood Gradients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="h-24 rounded-md bg-gradient-energetic mb-2"></div>
                    <p className="text-sm font-medium">Energetic</p>
                    <p className="text-xs text-muted-foreground">High energy, workout, party</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-md bg-gradient-chill mb-2"></div>
                    <p className="text-sm font-medium">Chill</p>
                    <p className="text-xs text-muted-foreground">Relaxed, calm, ambient</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-md bg-gradient-focus mb-2"></div>
                    <p className="text-sm font-medium">Focus</p>
                    <p className="text-xs text-muted-foreground">Concentration, work, study</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-md bg-gradient-nostalgic mb-2"></div>
                    <p className="text-sm font-medium">Nostalgic</p>
                    <p className="text-xs text-muted-foreground">Throwbacks, classics</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-md bg-gradient-melancholy mb-2"></div>
                    <p className="text-sm font-medium">Melancholy</p>
                    <p className="text-xs text-muted-foreground">Emotional, reflective</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-md bg-gradient-to-r from-[#1ED760] to-[#1DB954] mb-2"></div>
                    <p className="text-sm font-medium">Default</p>
                    <p className="text-xs text-muted-foreground">Spotify brand</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
