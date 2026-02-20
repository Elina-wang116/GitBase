import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    console.log('Login attempt:', { username, password });
    
    // 直接硬编码验证（最简单的方式）
    if (username === 'admin' && password === 'Rongtai2026') {
      return NextResponse.json({ 
        success: true,
        message: 'Login successful' 
      });
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Invalid username or password' 
      },
      { status: 401 }
    );
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
