import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/platform', label: 'Platform' },
  { path: '/solutions', label: 'Solutions' },
  { path: '/products', label: 'Products' },
  { path: '/industries', label: 'Industries' },
  { path: '/why-rockwell', label: 'Why Rockwell' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 lg:px-8 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-neutral-900 tracking-tight">
          ROCKWELL H2
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-all duration-150 relative ${
                location.pathname === link.path
                  ? 'text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
            REQUEST EVALUATION
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-neutral-200 p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === link.path
                    ? 'text-neutral-900 border-l-2 border-primary-500 pl-4'
                    : 'text-neutral-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-4"
            >
              REQUEST EVALUATION
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
