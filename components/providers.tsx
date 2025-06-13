"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { MoodProvider } from "@/components/mood-provider"
import { SpotifyAuthProvider } from "@/components/spotify-auth-provider"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SpotifyAuthProvider>
        <MoodProvider>
          {children}
          <Toaster position="top-center" />
        </MoodProvider>
      </SpotifyAuthProvider>
    </ThemeProvider>
  )
}
