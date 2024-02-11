
import "@/app/globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "Konata AnimeList",
  description: "AnimeList",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-color-bgPrimary`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
