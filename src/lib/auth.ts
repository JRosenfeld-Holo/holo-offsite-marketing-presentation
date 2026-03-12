import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            // Only allow users with an @hologram.io email address
            // (temporarily allowing numonics@gmail.com for local testing)
            if (user.email && (user.email.endsWith("@hologram.io") || user.email === "numonics@gmail.com")) {
                return true
            }
            return false
        },
    },
    pages: {
        // Optional: We can add a custom error page later if they are denied
        // error: '/auth/error', 
    },
    session: {
        strategy: "jwt",
    },
}
