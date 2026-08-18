import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Click } from "@/lib/clickModel";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const result = await Click.findOneAndUpdate(
      { linkId: id },
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );
    return NextResponse.json({ count: result.count });
  } catch {
    return NextResponse.json({ error: "DB 오류" }, { status: 500 });
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const result = await Click.findOne({ linkId: id });
    return NextResponse.json({ count: result?.count ?? 0 });
  } catch {
    return NextResponse.json({ error: "DB 오류" }, { status: 500 });
  }
}
