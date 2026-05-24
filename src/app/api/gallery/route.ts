import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// GET - Get all gallery images
export async function GET() {
  try {
    const [images] = await pool.execute(
      "SELECT * FROM gallery ORDER BY created_at DESC"
    );
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}

// POST - Add new gallery image (Admin only)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, image_path, category } = body;

    const [result]: any = await pool.execute(
      "INSERT INTO gallery (title, image_path, category) VALUES (?, ?, ?)",
      [title, image_path, category]
    );

    return NextResponse.json(
      { success: true, id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return NextResponse.json(
      { error: "Failed to create gallery item" },
      { status: 500 }
    );
  }
}
