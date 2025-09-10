export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Hero Section */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to a modern, beautifully crafted Hello World application built with Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-600">Built with Next.js for optimal performance and speed.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern</h3>
            <p className="text-gray-600">Styled with Tailwind CSS for a contemporary look.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive</h3>
            <p className="text-gray-600">Perfectly adapts to any screen size and device.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-blue-100 text-lg mb-6">
            This Hello World app is your starting point for creating incredible web experiences.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
            Get Started
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Built with ❤️ using Next.js, Tailwind CSS, and modern web technologies.</p>
        </div>
      </div>
    </div>
  );
}