import { NextResponse } from "next/server"
import { mockFileUpload } from "@/lib/mock-data"

export async function POST(request: Request) {
  const file = await request.blob()
  const filename = new URL(request.url).searchParams.get("filename") || "file.unknown"

  try {
    // Create a File object from the blob
    const fileObj = new File([file], filename, { type: file.type })

    // Use our mock implementation
    const result = await mockFileUpload(fileObj)

    return NextResponse.json({
      url: result.url,
      pathname: filename,
    })
  } catch (error) {
    console.error("Error handling file:", error)
    return NextResponse.json({ error: "Failed to handle file" }, { status: 500 })
  }
}
