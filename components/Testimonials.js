export default function Testimonials() {
  return (
    <section className="my-20 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-10">What the Community Says</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-black border border-orange-500 p-6 rounded-xl shadow-md hover:scale-105 transition">
          <p className="text-gray-300 italic">"I lost it all... Then Pumpa brought me back."</p>
          <p className="mt-4 text-sm text-orange-400">— @rekttony</p>
        </div>
        <div className="bg-black border border-orange-500 p-6 rounded-xl shadow-md hover:scale-105 transition">
          <p className="text-gray-300 italic">"This isn’t just a token. This is therapy."</p>
          <p className="mt-4 text-sm text-orange-400">— @wagmibro</p>
        </div>
        <div className="bg-black border border-orange-500 p-6 rounded-xl shadow-md hover:scale-105 transition">
          <p className="text-gray-300 italic">"Pumpa changed my life. Literally."</p>
          <p className="mt-4 text-sm text-orange-400">— @hopiumdealer</p>
        </div>
      </div>
    </section>
  );
}
