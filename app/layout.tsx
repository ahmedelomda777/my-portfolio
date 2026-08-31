import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Particles from "@/components/ui/Particles";
import Footer from "@/components/layout/footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed's Portfolio",
  description: "Frontend developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
                 <div
          style={{
            width: "100%",
            height: "100dvh",
            position: "fixed",
            zIndex: "-100",
         }}>
          <Particles
            particleColors={["#5abfbd"]}
            particleCount={1000}
            particleSpread={18}
            speed={0.1}
            sizeRandomness={1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
         <main className="flex flex-1 min-w-0 items-center justify-center ">
        
          {children}
          </main>
       <Footer/>
      </body>
    </html>
  );
}
