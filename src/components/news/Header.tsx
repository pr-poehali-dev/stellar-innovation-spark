import { Link, useLocation } from 'react-router-dom'
import { categories } from '@/data/news'
import Icon from '@/components/ui/icon'

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">TechPulse</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Главная
            </Link>
            <Link
              to="/categories"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/categories' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Категории
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              <Icon name="Bell" size={16} />
              Подписаться
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 pb-3 overflow-x-auto scrollbar-hide md:hidden">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/categories?cat=${cat}`}
              className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
