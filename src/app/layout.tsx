// app/layout.tsx
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="flex bg-gray-100">
        
        <Sidebar />

        <div className="flex-1 flex flex-col">
          
          <Topbar></Topbar>
          <main className="p-6">{children}</main>

        </div>

      </body>
    </html>
  );
}