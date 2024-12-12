import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

// Define response payload type
interface TokenResponse {
  token: string;
}

export async function GET(req: NextRequest) {
  console.log("Request received at /api/getConvertToken");
  
  const payload = { userId: "8mz4xr3" };
  const secretKey = process.env.JWT_SECRET || "your-secure-key";

  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  return NextResponse.json({ token } as TokenResponse, { status: 200 });
}
