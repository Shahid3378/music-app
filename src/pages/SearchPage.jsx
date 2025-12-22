import { Sidebar } from "../components/sidebar";

const categories = [
  { title: "Pop", from: "from-red-500", to: "to-yellow-600" },
  { title: "Rock", from: "from-yellow-500", to: "to-green-700" },
  { title: "Hip Hop", from: "from-lime-400", to: "to-green-700" },
  { title: "Electronic", from: "from-green-400", to: "to-green-600" },
  { title: "Jazz", from: "from-emerald-400", to: "to-teal-700" },
  { title: "Classical", from: "from-cyan-400", to: "to-blue-800" },
  { title: "R&B", from: "from-blue-500", to: "to-purple-700" },
  { title: "Country", from: "from-purple-600", to: "to-pink-800" },
];

export default function SearchPage() {
  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-background text-white p-8 md:ml-64">
        <h1 className="text-xl font-semibold mb-6">Search</h1>

        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full max-w-xl bg-[#1f1f1f] px-4 py-3 rounded-full outline-none text-sm mb-10"
        />

        <h2 className="text-2xl font-bold mb-6">Browse All</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`h-50 w-50 rounded-xl bg-linear-to-br ${item.from} ${item.to}
        p-4 cursor-pointer hover:scale-[1.03] transition`}
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
