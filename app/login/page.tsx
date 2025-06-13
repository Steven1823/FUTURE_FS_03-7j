"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Facebook, Apple } from "lucide-react"
import { auth } from "@/lib/firebase"
import { toast } from "sonner"

export default function LoginPage() {
  const [email, setEmail] = useState("demo@example.com")
  const [password, setPassword] = useState("password")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Update the handleSubmit function to better handle errors
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Use our mock auth service
      await auth.signIn(email, password)
      toast.success("Logged in successfully!")
      router.push("/")
    } catch (error) {
      console.error("Login error:", error)
      // Provide more helpful error message
      toast.error("Login failed. Please use demo@example.com / password or any credentials for demo purposes")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    toast.info(`${provider} login is not implemented in this demo`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <span className="sr-only">Spotify</span>
            <svg className="h-12 w-12 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.65 14.65c-.2.2-.51.2-.71 0-1.79-1.77-4.39-2.15-6.79-1.44-.33.09-.66-.12-.75-.44-.09-.33.12-.66.44-.75 2.82-.82 5.82-.39 7.95 1.5.2.19.2.5 0 .69zm1.23-2.75c-.25.25-.65.25-.9 0-2.05-2.05-5.18-2.65-7.6-1.45-.29.14-.65.02-.79-.28-.14-.29-.02-.65.28-.79 2.77-1.35 6.26-.69 8.61 1.66.25.25.25.65 0 .9zm.11-2.78c-.25.25-.67.25-.92 0-2.36-2.36-6.29-2.88-9.1-1.58-.34.16-.74.01-.9-.33-.16-.34-.01-.74.33-.9 3.26-1.46 7.68-.86 10.52 1.98.25.25.25.67 0 .92z" />
            </svg>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Log in to Spotify</h2>
          <p className="mt-2 text-sm text-muted-foreground">Demo credentials: demo@example.com / password</p>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 border-2"
            onClick={() => handleSocialLogin("Facebook")}
          >
            <Facebook className="h-5 w-5" />
            <span>Continue with Facebook</span>
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 border-2"
            onClick={() => handleSocialLogin("Apple")}
          >
            <Apple className="h-5 w-5" />
            <span>Continue with Apple</span>
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 border-2"
            onClick={() => handleSocialLogin("Google")}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Continue with Google</span>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email or username</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                />
                <Label htmlFor="remember-me" className="ml-2 text-sm">
                  Remember me
                </Label>
              </div>

              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot your password?
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <div className="text-center">
            <Separator className="my-6" />
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up for Spotify
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
