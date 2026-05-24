import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// GET - Get all services
export async function GET() {
  try {
    const [services] = await pool.execute(
      "SELECT * FROM services ORDER BY created_at DESC"
    );
    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

// POST - Create new service (Admin only)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, icon } = body;

    const [result]: any = await pool.execute(
      "INSERT INTO services (title, description, icon) VALUES (?, ?, ?)",
      [title, description, icon]
    );

    return NextResponse.json(
      { success: true, id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}
