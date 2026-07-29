import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geist=Geist({variable:"--geist",subsets:["latin"]});const mono=Geist_Mono({variable:"--mono",subsets:["latin"]});
export const metadata:Metadata={title:"Aditya — Creative Developer & Designer",description:"Bold design, playful motion and memorable digital experiences."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>}
