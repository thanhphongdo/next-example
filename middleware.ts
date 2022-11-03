import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
    function middleware(req: NextRequest) {
        return NextResponse.next();
        // return NextResponse.rewrite(new URL("/admin", req.url));
    },
    {
        callbacks: {
            authorized({ token }) {
                console.log('----------middleware----------' + (token as any).random)
                return !!token
            },
        },
    }
);

// export function middleware(request: NextRequest) {
//     return NextResponse.next();
// }

export const config = { matcher: ["/dashboard"] };