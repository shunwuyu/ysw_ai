import {
    NextRequest,
    NextResponse
} from 'next/server'
import {
    verifyToken
} from './lib/jwt';

const protectedPath = ['/dashboard', '/profile']
// pre      next
export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
   
    // console.log(path);
    // console.log('打中间件这必须过一下子');
    // 非保护的
    if (!protectedPath.some(p => path.startsWith(p))) {
        return NextResponse.next();
    }
    // login?
    const accessToken = request.cookies.get('access_token')?.value;
    const refreshToken = request.cookies.get('refresh_token')?.value;
    console.log(accessToken, refreshToken, '???/////');

    if (!accessToken && !refreshToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (accessToken) {
        const accessPayload = await verifyToken(accessToken);
        // console.log(accessPayload, '////');
        if (accessPayload) {
            const requestHeaders = new Headers(request.headers);
            requestHeaders.set(
                'x-user-id',
                accessPayload.userId as string
            )
            return NextResponse.next({
                request: {
                    headers: requestHeaders
                }
            })
        }
    }
    // accessToken过期了  无感刷新
    if(refreshToken) {
        const refreshPyaload = await verifyToken(refreshToken);
        if (refreshPyaload) {
            // 断言
            // const userId = refreshPyaload.userId as string;
            const refreshUrl = new URL('/api/auth/refresh', request.url);
            refreshUrl.searchParams.set('redirect', request.url);
            // console.log(refreshUrl, '////')
            return NextResponse.redirect(refreshUrl);
        }
    }
    
    return NextResponse.redirect(new URL('/login', request.url));
}