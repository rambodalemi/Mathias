import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');
    if (!folder) {
      return NextResponse.json({ error: 'Missing folder parameter' }, { status: 400 });
    }

    const { resources } = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();

    const urls = resources.map((file: any) => ({
      src: file.secure_url,
      alt: file.public_id,
      orientation: file.width > file.height ? "horizontal" : "vertical",
    }));

    return NextResponse.json(urls);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}