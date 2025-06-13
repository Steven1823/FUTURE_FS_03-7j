// Mock user data
export const mockUser = {
  id: "user123",
  name: "Demo User",
  email: "demo@example.com",
  photoURL: null,
}

// Mock playlists data
export const mockPlaylists = [
  {
    id: "playlist1",
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    image: "/placeholder.svg?height=300&width=300",
    songs: "50 songs",
  },
  {
    id: "playlist2",
    title: "RapCaviar",
    description: "New music from Drake, Kendrick Lamar and more",
    image: "/placeholder.svg?height=300&width=300",
    songs: "50 songs",
  },
  {
    id: "playlist3",
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s.",
    image: "/placeholder.svg?height=300&width=300",
    songs: "100 songs",
  },
  {
    id: "playlist4",
    title: "Rock Classics",
    description: "Rock legends & epic songs that continue to inspire generations.",
    image: "/placeholder.svg?height=300&width=300",
    songs: "75 songs",
  },
]

// Mock authentication functions
export const mockAuth = {
  signIn: async (email: string, password: string) => {
    // Simulate successful login with demo@example.com/password
    if (email === "demo@example.com" && password === "password") {
      return { user: mockUser }
    }
    throw new Error("Invalid email or password")
  },
  signUp: async (email: string, password: string, name: string) => {
    // Always simulate successful signup
    return { user: { ...mockUser, email, name } }
  },
  signOut: async () => {
    // Simulate successful logout
    return true
  },
  getCurrentUser: () => {
    // Simulate a logged in user
    return mockUser
  },
}

// Mock file upload function to replace Vercel Blob
export const mockFileUpload = async (file: File): Promise<{ url: string }> => {
  // Instead of uploading to Blob, we'll create an object URL
  // This is temporary and will only work during the current session
  const url = URL.createObjectURL(file)

  // In a real app, we'd upload to a service and get a permanent URL
  return { url }
}
