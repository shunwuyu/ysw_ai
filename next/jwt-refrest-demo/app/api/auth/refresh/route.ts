import {
    NextRequest, NextResponse
} from 'next/server';
import {
    prisma
} from '@/lib/db'
import {
    createTokens,
    verifyToken
} from '@/lib/jwt'

export async function GET(request: NextRequest) {
    try {
        
        const refreshToken = request.cookies.get("refresh_token")?.value;
        const redirectUrl = request.nextUrl.searchParams.get('redirect')
            ||"/dashboard";
        
        if (!refreshToken) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        const refreshPayload = await verifyToken(refreshToken);
        if (!refreshPayload || !refreshPayload.userId) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        const userId = refreshPayload.userId as number;
        // 刷新？ 数据库再校验一次
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        // console.log(user, 'refresh----------------------------');
        console.log(user?.refreshToken, "\n","\n", refreshToken);

        if (!user || user?.refreshToken !== refreshToken) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        const {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        } = await createTokens(userId)

        await prisma.user.update({
            where: {
                id: userId
            },
            data:{refreshToken: newRefreshToken}
        })

        

        const response = NextResponse.redirect(new URL(redirectUrl, request.url));
        response.cookies.set('access_token', newAccessToken, {
            httpOnly: true,
            maxAge: 60*15,
            sameSite: 'strict',
            path: '/'
        })
        response.cookies.set('refresh_token', newRefreshToken, {
            httpOnly: true,
            maxAge: 60*60*24*7,
            sameSite: 'strict',
            path: '/'
        })
        return response

    } catch(err) {
        console.error('Token refresh error:', err);
        return NextResponse.redirect(new URL('/login', request.url))
    }
}