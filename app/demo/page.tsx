"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { mockPlaylists, mockUser } from "@/lib/mock-data"
import { uploadToBlob } from "@/lib/blob"
import { toast } from "sonner"

export default function DemoPage() {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first")
      return
    }

    setIsUploading(true)
    try {
      const result = await uploadToBlob(file)
      setImageUrl(result.url)
      toast.success("File uploaded successfully!")
    } catch (error) {
      console.error("Upload error:", error)
      toast.error("Failed to upload file")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Demo Page - No External Dependencies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Mock User Data</CardTitle>
            <CardDescription>Using local mock data instead of Firebase</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-auto">{JSON.stringify(mockUser, null, 2)}</pre>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              This data is loaded from local mock data instead of Firebase
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mock File Upload</CardTitle>
            <CardDescription>Using local blob URLs instead of Vercel Blob</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-muted-foreground
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-primary file:text-primary-foreground
                    hover:file:bg-primary/90"
                />
              </div>

              <Button onClick={handleUpload} disabled={!file || isUploading}>
                {isUploading ? "Uploading..." : "Upload File"}
              </Button>

              {imageUrl && (
                <div className="mt-4">
                  <p className="mb-2 text-sm font-medium">Uploaded Image:</p>
                  <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-lg">
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt="Uploaded file"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This image is stored locally using URL.createObjectURL instead of Vercel Blob
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Mock Playlists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockPlaylists.map((playlist) => (
          <Card key={playlist.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={playlist.image || "/placeholder.svg"}
                alt={playlist.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold mb-1">{playlist.title}</h3>
              <p className="text-sm text-muted-foreground">{playlist.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{playlist.songs}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
