import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';
export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize(credentials, req) {
                console.log(process.env.NEXTAUTH_URL_INTERNAL)
                console.log(process.env.NEXTAUTH_SECRET)
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                // perform you login logic
                // find out user from db
                if (email !== "john@gmail.com" || password !== "1234") {
                    throw new Error("invalid credentials");
                }

                // if everything is fine
                return {
                    id: "1234",
                    name: "John Doe",
                    email: "john@gmail.com",
                    role: "admin222",
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                    accessToken: 'access_token'
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
        signOut: "/login",
    },
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log('---------callback signIn---------');
            return true;
        },
        async jwt({ token, account, profile }) {
            await (new Promise((res) => { setTimeout(() => { res(true) }, 200) }));
            token.role = 'admin';
            token.random = Math.ceil(Math.random() * 10000);
            token.accessToken = 'access_token';
            console.log('----------------callback jwt-------------- ' + token.random);
            return token;
        },
        async session({ session, user, token }) {
            console.log('---------callback session---------');
            // console.log(user, token);
            (session as any).accessToken = token.accessToken;
            return session
        },
        redirect({ url, baseUrl }) {
            baseUrl = process.env.NEXTAUTH_BASE_URL as string;
            if (url) {
                try {
                    const origin = new URL(url).origin
                    return url;
                }
                catch (err) {
                    console.log(`${baseUrl}${url}`);
                    return `${baseUrl}${url}`;
                }
            }
            return baseUrl;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)