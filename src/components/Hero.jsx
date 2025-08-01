const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Maximo renewables asset performance management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Maximize the efficiency and reliability of solar, wind, and battery storage assets
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Book a live demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Solution Brief
              </button>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Dashboard</h3>
              <p className="text-blue-100">Real-time monitoring and analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 