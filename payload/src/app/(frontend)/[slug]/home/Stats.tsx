export default function Stats() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-4">The market leader in healthcare AI</p>
        <p className="text-gray-600 mb-8">
          Corti’s advanced AI, built with deep expertise in medical terminology, industry-specific
          conversations, and recognition of language models, outperforms any foundation model
          available today.
        </p>
        <div className="flex justify-center">
          <div className="w-64">
            <div className="flex items-center mb-2">
              <div className="w-1/3 text-right pr-2 text-gray-600">100%</div>
              <div className="w-2/3 bg-gray-200 h-4 rounded-full">
                <div className="bg-orange-500 h-4 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/3 text-right pr-2 text-gray-600">50%</div>
              <div className="w-2/3 bg-gray-200 h-4 rounded-full">
                <div className="bg-gray-400 h-4 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
