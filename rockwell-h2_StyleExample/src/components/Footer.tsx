import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ROCKWELL H2</h3>
            <p className="text-neutral-400 text-sm">
              Industrial-grade hydrogen infrastructure for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary-500">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-neutral-400 hover:text-white text-sm">Home</Link>
              <Link to="/platform" className="text-neutral-400 hover:text-white text-sm">Platform</Link>
              <Link to="/solutions" className="text-neutral-400 hover:text-white text-sm">Solutions</Link>
              <Link to="/products" className="text-neutral-400 hover:text-white text-sm">Products</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary-500">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/industries" className="text-neutral-400 hover:text-white text-sm">Industries</Link>
              <Link to="/why-rockwell" className="text-neutral-400 hover:text-white text-sm">Why Rockwell</Link>
              <Link to="/contact" className="text-neutral-400 hover:text-white text-sm">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary-500">Contact</h4>
            <div className="text-neutral-400 text-sm space-y-2">
              <p>Brad Rockwell: (714) 305-3300</p>
              <p>Nick Rockwell: (510) 960-0261</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          Copyright 2025 Rockwell Engineering and Equipment. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
