import { useState } from 'react';

export default function AlertModal() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
      <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full shadow-lg text-center relative">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 text-sm text-gray-600 hover:text-red-500"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-2">Pumpa Airdrop Alert!</h3>
        <p className="text-sm text-gray-700">
          1000 lucky users will receive $PUMPA. Follow @Pumpa_Cto and join our Telegram to qualify!
        </p>
      </div>
    </div>
  );
}
