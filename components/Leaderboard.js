export default function Leaderboard() {
  const leaders = [
    { name: '@rekttony', score: '1289 pts' },
    { name: '@wagmibro', score: '1032 pts' },
    { name: '@hopiumdealer', score: '998 pts' },
  ];

  return (
    <section className="my-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Top Shillers</h2>
      <ul className="space-y-4 text-left">
        {leaders.map((user, index) => (
          <li
            key={index}
            className="bg-black border border-cyan-500 p-4 rounded-xl shadow-md hover:scale-105 transition flex justify-between items-center"
          >
            <span className="text-white font-semibold">{index + 1}. {user.name}</span>
            <span className="text-cyan-400">{user.score}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
