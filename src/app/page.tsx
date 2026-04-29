// app/page.tsx
export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">Focus 75%</div>
        <div className="bg-white p-4 rounded-xl shadow">18 Apps</div>
        <div className="bg-white p-4 rounded-xl shadow">7 Distraksi</div>
        <div className="bg-white p-4 rounded-xl shadow">2 Jam Fokus</div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* CHART */}
        <div className="col-span-2 bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Productivity Overview
          </h2>

          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart nanti disini
          </div>

          <div className="flex justify-around mt-4 text-lg font-semibold">
            <span>75%</span>
            <span>18</span>
            <span>7</span>
          </div>
        </div>

        {/* TASK STATUS */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Task Status
          </h2>

          <div className="h-40 flex items-center justify-center">
            42%
          </div>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* DEADLINE */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Upcoming Deadlines
          </h2>

          <p>Software Engineering - 29 May</p>
        </div>

        {/* RECENT */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Recent Activity
          </h2>

          <p>Submit report</p>
        </div>

        {/* PERSONAL ACTIVITY */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Personal Activity
          </h2>

          <p>You used YouTube 3 hours</p>
        </div>

      </div>

    </div>
  );
}