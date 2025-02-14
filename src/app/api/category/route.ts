import { NextRequest } from "next/server";
import { createCategory, getCategories } from "./category.controller";

export async function POST(req: Request) {
  return createCategory(req);
}

export async function GET(req: NextRequest) {
  return getCategories(req)
}
