const NextSteps = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Take the next steps
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Get started with a consultation to discover how IBM Maximo Renewables can transform your asset performance management
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  )
}

export default NextSteps 