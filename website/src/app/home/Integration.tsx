export default function Integration() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Integrate our API</h2>
          <p className="mb-4">Streamline workflows, cut costs, and improve patient care.</p>
          <pre className="bg-gray-700 p-4 rounded overflow-x-auto">
            {`const response = await fetch('https://api.corti.ai/patients', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ patientData })
  });`}
          </pre>
        </div>
        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Product Library</h2>
          <p className="mb-4">Plug and play to instantly scale your workflows.</p>
          <div className="bg-gray-800 p-4 rounded">
            {/* Simulated chart/graph */}
            <div className="h-32 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
