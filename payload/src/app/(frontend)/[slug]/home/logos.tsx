import Image from 'next/image'

export default function Logos() {
  const logos = [
    'https://picsum.photos/200', // Replace with actual logo URLs
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ]

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            width={200}
            height={200}
            alt={`Partner ${index + 1}`}
            className="h-12 object-contain"
          ></Image>
        ))}
      </div>
    </section>
  )
}
