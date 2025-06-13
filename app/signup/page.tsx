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
import { Facebook } from "lucide-react"
import { auth } from "@/lib/firebase"
import { toast } from "sonner"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" })
  const [gender, setGender] = useState("")
  const [marketing, setMarketing] = useState(false)
  const [terms, setTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (email !== confirmEmail) {
      toast.error("Emails don't match")
      return
    }

    setIsLoading(true)

    try {
      // Use our mock auth service
      await auth.signUp(email, password, name)
      toast.success("Account created successfully!")
      router.push("/")
    } catch (error) {
      console.error("Signup error:", error)
      toast.error("Failed to create account")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignup = (provider: string) => {
    toast.info(`${provider} signup is not implemented in this demo`)
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

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
          <h2 className="mt-6 text-3xl font-bold">Sign up for free to start listening</h2>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 h-12 border-2"
          onClick={() => handleSocialSignup("Facebook")}
        >
          <Facebook className="h-5 w-5" />
          <span>Sign up with Facebook</span>
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
            <Label htmlFor="email">What's your email?</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="confirm-email">Confirm your email</Label>
            <Input
              id="confirm-email"
              type="email"
              placeholder="Enter your email again"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Create a password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="name">What should we call you?</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter a profile name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">This appears on your profile.</p>
          </div>

          <div>
            <Label>What's your date of birth?</Label>
            <div className="grid grid-cols-3 gap-4 mt-1">
              <div>
                <Label htmlFor="day" className="text-xs">
                  Day
                </Label>
                <Input
                  id="day"
                  type="number"
                  placeholder="DD"
                  min="1"
                  max="31"
                  value={birthDate.day}
                  onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="month" className="text-xs">
                  Month
                </Label>
                <select
                  id="month"
                  value={birthDate.month}
                  onChange={(e) => setBirthDate({ ...birthDate, month: e.target.value })}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="year" className="text-xs">
                  Year
                </Label>
                <Input
                  id="year"
                  type="number"
                  placeholder="YYYY"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={birthDate.year}
                  onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <Label>What's your gender?</Label>
            <div className="grid grid-cols-3 gap-4 mt-1">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  className="h-4 w-4 text-primary"
                />
                <Label htmlFor="male" className="text-sm">
                  Male
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  className="h-4 w-4 text-primary"
                />
                <Label htmlFor="female" className="text-sm">
                  Female
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="non-binary"
                  name="gender"
                  value="non-binary"
                  checked={gender === "non-binary"}
                  onChange={() => setGender("non-binary")}
                  className="h-4 w-4 text-primary"
                />
                <Label htmlFor="non-binary" className="text-sm">
                  Non-binary
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <Checkbox
                id="marketing"
                checked={marketing}
                onCheckedChange={(checked) => setMarketing(!!checked)}
                className="mt-1"
              />
              <Label htmlFor="marketing" className="ml-2 text-sm">
                I would like to receive marketing messages from Spotify
              </Label>
            </div>

            <div className="flex items-start">
              <Checkbox
                id="terms"
                checked={terms}
                onCheckedChange={(checked) => setTerms(!!checked)}
                required
                className="mt-1"
              />
              <Label htmlFor="terms" className="ml-2 text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Spotify Terms and Conditions of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
