"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { MoodProvider } from "@/components/mood-provider"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <MoodProvider>
        {children}
        <Toaster position="top-center" />
      </MoodProvider>
    </ThemeProvider>
  )
}
