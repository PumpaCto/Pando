import Image from 'next/image';

export default function PartnerLogos() {
  const logos = [
    '/partner-logos/logo1.png',
    '/partner-logos/logo2.png',
    '/partner-logos/logo3.png',
  ];

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-orange-400 mb-6">Supported By</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {logos.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Partner ${idx + 1}`}
            width={120}
            height={60}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
