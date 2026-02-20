import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    username: process.env.ADMIN_USERNAME || 'not set',
    password: process.env.ADMIN_PASSWORD ? '***set***' : 'not set',
    hasUsername: !!process.env.ADMIN_USERNAME,
    hasPassword: !!process.env.ADMIN_PASSWORD
  });
}
