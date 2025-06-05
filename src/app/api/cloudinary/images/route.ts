import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const maxResults = Number.parseInt(searchParams.get("max_results") || "20")
    const nextCursor = searchParams.get("next_cursor")

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        {
          resources: [],
          error: "Cloudinary credentials are missing. Please check your environment variables.",
        },
        { status: 500 },
      )
    }

    // Use Cloudinary Admin API with fetch instead of SDK
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`

    const params = new URLSearchParams({
      max_results: maxResults.toString(),
      type: "upload",
    })

    if (nextCursor) {
      params.append("next_cursor", nextCursor)
    }

    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")

    const response = await fetch(`${url}?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Cloudinary API error:", response.status, errorText)
      return NextResponse.json(
        {
          resources: [],
          error: `Cloudinary API error: ${response.status} - ${errorText}`,
        },
        { status: response.status },
      )
    }

    const data = await response.json()

    // Transform the response to match our expected format
    const transformedResources = (data.resources || []).map((resource: any) => ({
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      format: resource.format,
      bytes: resource.bytes,
      created_at: resource.created_at,
      tags: resource.tags || [],
    }))

    return NextResponse.json({
      resources: transformedResources,
      next_cursor: data.next_cursor,
      total_count: data.resources?.length || 0,
    })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      {
        resources: [],
        error: error instanceof Error ? error.message : "Failed to fetch images from Cloudinary",
      },
      { status: 500 },
    )
  }
}
