export default function Card({ app, duration }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border">
      <h2 className="font-semibold text-lg">{app}</h2>

      <p className="text-gray-500 mt-2">
        {duration} menit
      </p>

      <div className="mt-4 text-sm text-blue-600">
        View Details →
      </div>
    </div>
  );
}