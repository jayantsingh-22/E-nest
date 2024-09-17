import { NextResponse } from "next/server";
import db from "@/app/api/database/connection";
import Review from "@/app/api/models/reviewModel";

export async function GET() {
  try {
    await db();
    const reviews = await Review.find();
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
