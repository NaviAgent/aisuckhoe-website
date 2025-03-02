import Image from 'next/image'

export default function Trust() {
  const trustLogos = [
    'https://via.placeholder.com/50', // Replace with actual logo URLs
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-4">Trust and compliance</p>
        <p className="text-gray-600 mb-8">
          Trusted by leading healthcare providers to enhance millions of patient interactions and
          integrate seamlessly into their workflows
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {trustLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={50}
              height={50}
              alt={`Trust logo ${index + 1}`}
              className="h-12 object-contain"
            ></Image>
          ))}
        </div>
      </div>
    </section>
  )
}
