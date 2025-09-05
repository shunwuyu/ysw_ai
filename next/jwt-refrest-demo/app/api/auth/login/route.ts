import {
    NextRequest,
    NextResponse
} from 'next/server';
import {
    prisma
} from '@/lib/db';
import {
    emailRegex,
    passwordRegex
} from '@/lib/regexp';
import bcrypt from 'bcryptjs'
import {
    createTokens,
    setAuthCookies
} from '@/lib/jwt';

export async function POST(request: NextRequest) {
    try {
        const {
            email,
            password
        } = await request.json();
        
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({
                error: 'Email 输入有误!'
            }, {
                status: 400
            })
        }
        if (!password || !passwordRegex.test(password)) {
            return NextResponse.json({
                error: 'password 输入有误!'
            }, {
                status: 400
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return NextResponse.json({
                error: 'Invalid credentials'
            }, {
                status: 401
            })
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return NextResponse.json({
                error: 'Invalid credentials'
            }, {
                status: 401
            })
        }

        const { accessToken, refreshToken } = await createTokens(user.id);
       
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                refreshToken
            }
        })

        setAuthCookies(accessToken, refreshToken);

        return NextResponse.json({
            message: 'Login successful'
        })
    } catch(err) {
        console.error(err);
        return NextResponse.json({
            error: 'Interval server error'
        }, {
            status: 500
        })

    } finally {
        // 释放数据库对象
        await prisma.$disconnect();
    }
}
