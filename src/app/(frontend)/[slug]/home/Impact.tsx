import Link from 'next/link'

export default function Impact() {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">250,000 patients will receive care</h2>
        <p className="text-gray-600 mb-8">today from providers using Corti</p>
        <Link
          href="/careers"
          className="bg-gray-900 text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Join our mission
        </Link>
      </div>
    </section>
  )
}
