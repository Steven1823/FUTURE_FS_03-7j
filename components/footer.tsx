import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Globe } from "lucide-react"

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Jobs", href: "/jobs" },
  { name: "For the Record", href: "/news" },
]

const communitiesLinks = [
  { name: "For Artists", href: "/artists" },
  { name: "Developers", href: "/developers" },
  { name: "Advertising", href: "/advertising" },
  { name: "Investors", href: "/investors" },
]

const usefulLinks = [
  { name: "Support", href: "/support" },
  { name: "Web Player", href: "/web-player" },
  { name: "Free Mobile App", href: "/download" },
]

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: "https://instagram.com/spotify" },
  { icon: <Twitter className="h-6 w-6" />, href: "https://twitter.com/spotify" },
  { icon: <Facebook className="h-6 w-6" />, href: "https://facebook.com/spotify" },
  { icon: <Youtube className="h-6 w-6" />, href: "https://youtube.com/spotify" },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Spotify Logo"
                width={40}
                height={40}
                className="dark:invert"
              />
              <span className="text-xl font-bold">Spotify</span>
            </Link>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Communities</h3>
            <ul className="space-y-3">
              {communitiesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border">
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-muted hover:bg-muted/80 p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span>USA (English)</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-4 mb-4">
            <Link href="/legal" className="hover:text-foreground transition-colors">
              Legal
            </Link>
            <Link href="/privacy-center" className="hover:text-foreground transition-colors">
              Privacy Center
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
            <Link href="/about-ads" className="hover:text-foreground transition-colors">
              About Ads
            </Link>
          </div>
          <p>© 2025 Spotify AB</p>
        </div>
      </div>
    </footer>
  )
}
