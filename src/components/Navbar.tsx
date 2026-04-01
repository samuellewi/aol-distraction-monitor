export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">
        Distraction Monitor
      </h1>

      <div className="space-x-4">
        <button className="hover:underline">Dashboard</button>
        <button className="hover:underline">Settings</button>
      </div>
    </nav>
  );
}