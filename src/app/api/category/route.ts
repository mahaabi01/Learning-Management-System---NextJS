import { NextRequest } from "next/server";
import { createCategory, getCategories } from "./category.controller";

export async function POST(req: NextRequest) {
  return createCategory(req);
}

export async function GET() {
  return getCategories()
}
