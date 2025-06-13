import { mockFileUpload } from "./mock-data"

export async function uploadToBlob(file: File): Promise<{ url: string }> {
  // Use our mock implementation instead of actual Vercel Blob
  return mockFileUpload(file)
}

export function getBlobUrl(url: string): string {
  // Ensure the URL is properly formatted
  if (!url) return ""

  // If it's already a full URL, return it
  if (url.startsWith("http") || url.startsWith("blob:")) return url

  // Otherwise, it might be a relative path that needs to be handled
  return url
}
