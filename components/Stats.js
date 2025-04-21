export default function Stats() {
  return (
    <section className="my-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-10">Pumpa Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-100">
        <div className="bg-black border border-cyan-400 rounded-xl p-6 shadow hover:scale-105 transition">
          <p className="text-4xl font-bold text-cyan-400">45K+</p>
          <p className="mt-2 text-sm">Community Members</p>
        </div>
        <div className="bg-black border border-orange-400 rounded-xl p-6 shadow hover:scale-105 transition">
          <p className="text-4xl font-bold text-orange-400">920%</p>
          <p className="mt-2 text-sm">All-Time ROI</p>
        </div>
        <div className="bg-black border border-pink-500 rounded-xl p-6 shadow hover:scale-105 transition">
          <p className="text-4xl font-bold text-pink-500">16</p>
          <p className="mt-2 text-sm">CEX/DEX Listings</p>
        </div>
      </div>
    </section>
  );
}
