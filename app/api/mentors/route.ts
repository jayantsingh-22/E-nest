import { NextResponse } from "next/server";
import db from "@/app/api/database/connection";
import Mentor from "@/app/api/models/mentorModel";

export async function GET() {
  try {
    await db();
    const mentors = await Mentor.find();
    return NextResponse.json(mentors);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
