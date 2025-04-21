import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function LightSwitch() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-2 p-2 bg-black border border-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition"
      title="Toggle Dark Mode"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
