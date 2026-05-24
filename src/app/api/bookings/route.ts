import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// GET - Get all bookings
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [bookings] = await pool.execute(
      "SELECT * FROM bookings ORDER BY created_at DESC"
    );

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

// POST - Create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, address, service_type, message } = body;

    // Validation
    if (!name || !phone || !address) {
      return NextResponse.json(
        { error: "Name, phone, and address are required" },
        { status: 400 }
      );
    }

    const [result]: any = await pool.execute(
      `INSERT INTO bookings (name, phone, address, service_type, message, status, created_at) 
       VALUES (?, ?, ?, ?, ?, 'new', NOW())`,
      [name, phone, address, service_type || null, message || null]
    );

    return NextResponse.json(
      { 
        success: true, 
        message: "Booking created successfully",
        id: result.insertId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
