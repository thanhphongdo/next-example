import { Session } from "next-auth";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="min-h-full">
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <main>{children}</main>
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    )
}