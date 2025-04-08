import { NextResponse } from "next/server";
import { db } from "@/app/lib/db"; // Ensure this points to a valid Prisma client instance
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z
  .object({
    username: z.string().min(1, "username is required").max(100),
    email: z.string().min(1, "email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "password is required")
      .min(8, "password must be at least 8 characters long"),
    confirmPassword: z.string().min(1, "confirm password is required"),
  })
  

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body); // Validate and parse the request body
    // Check if the user already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Check if the username already exists
    const existingUserByUsername = await db.user.findUnique({
      where: { username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: _newUserPassword, ...rest } = newUser; // Exclude password from the response

    return NextResponse.json(
      { user: { ...rest }, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
