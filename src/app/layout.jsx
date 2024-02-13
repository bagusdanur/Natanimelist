
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { ScrollUp } from "@/components/Utilities/ScrollUp";


export const metadata = {
  title: "AnimeList",
  description: "AnimeList",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <ScrollUp />
        </body>
    </html>
  );
}
