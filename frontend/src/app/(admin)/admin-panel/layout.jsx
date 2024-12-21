import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";
import SideMenu from "@/src/components/admin/SideBar";
import Header from "@/src/components/admin/Header";
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Admin Dashbaord"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ToastContainer/>
                <div className="w-full grid grid-cols-5">
                    <SideMenu />
                    <div className="col-span-4 bg-gray-200">
                        <Header />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}


