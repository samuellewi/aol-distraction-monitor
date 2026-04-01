import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
  const data = [
    { app: "Chrome", duration: 120 },
    { app: "VS Code", duration: 90 },
    { app: "YouTube", duration: 60 },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-6">
        <h1 className="text-2xl font-bold mb-6">
          Productivity Dashboard
        </h1>

        <p className="text-gray-500 mb-6">
            Monitor aktivitas aplikasi dan tingkat distraksi harian Anda.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <Card
              key={index}
              app={item.app}
              duration={item.duration}
            />
          ))}
        </div>
      </section>
    </main>
  );
}