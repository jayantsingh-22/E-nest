import { NextResponse } from "next/server";
import db from "@/app/api/database/connection";
import nodemailer from "nodemailer";

import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

export async function POST(request: Request) {
  try {
    await db();
    const { user, sessionDetails } = await request.json();
    console.log(user, sessionDetails);

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: "smtp.mailersend.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILERSEND_USERNAME,
        pass: process.env.MAILERSEND_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Session Booking Confirmation",
      text: `Dear ${
        user.name
      },\n\nYour session has been booked successfully.\n\nSession Details:\n${JSON.stringify(
        sessionDetails,
        null,
        2
      )}\n\nThank you!`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Booking confirmed and email sent." });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
