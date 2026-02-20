import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    // 从环境变量获取管理员凭据
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    console.log('Login attempt:', { username });
    console.log('Expected:', { 
      username: adminUsername, 
      hasPassword: !!adminPassword 
    });
    
    if (username === adminUsername && password === adminPassword) {
      return NextResponse.json({ 
        success: true,
        message: 'Login successful' 
      });
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Invalid username or password',
        debug: {
          receivedUsername: username,
          expectedUsername: adminUsername,
          passwordMatch: password === adminPassword
        }
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
