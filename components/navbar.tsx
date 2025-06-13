"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Spotify Logo"
            width={40}
            height={40}
            className="dark:invert"
          />
          <span className="text-xl font-bold">Spotify</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/premium" className="text-sm font-medium hover:text-primary transition-colors">
            Premium
          </Link>
          <Link href="/support" className="text-sm font-medium hover:text-primary transition-colors">
            Support
          </Link>
          <Link href="/download" className="text-sm font-medium hover:text-primary transition-colors">
            Download
          </Link>
          <div className="h-6 w-px bg-border"></div>
          <Link href="/signup" className="text-sm font-medium hover:text-primary transition-colors">
            Sign up
          </Link>
          <Link href="/login">
            <Button variant="default">Log in</Button>
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/premium"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Premium
            </Link>
            <Link
              href="/support"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/download"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </Link>
            <div className="h-px w-full bg-border my-2"></div>
            <Link
              href="/signup"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="w-full">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
