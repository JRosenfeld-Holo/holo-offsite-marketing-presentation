import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/api/auth/signin",
    },
})

export const config = {
    // Protect all routes by default.
    // We exclude api routes, _next/static, _next/image, and favicons from triggering the login redirect.
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logos|videos).*)"],
}
