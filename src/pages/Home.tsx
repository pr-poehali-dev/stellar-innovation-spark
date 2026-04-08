import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/news/Header'
import NewsCard from '@/components/news/NewsCard'
import { news, categories, categoryColors } from '@/data/news'
import type { Category } from '@/data/news'
import Icon from '@/components/ui/icon'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'Все'>('Все')

  const featured = news.filter(n => n.featured)
  const filtered = activeCategory === 'Все'
    ? news.filter(n => !n.featured)
    : news.filter(n => n.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        {/* Hero Featured */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.map(item => (
              <NewsCard key={item.id} item={item} featured />
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Последние новости</h2>
            <Link to="/categories" className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700">
              Все категории
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory('Все')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'Все' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
            >
              Все
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Newsletter Banner */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-xl mx-auto">
            <Icon name="Mail" size={40} className="text-white mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Не пропустите главное</h3>
            <p className="text-blue-100 mb-6">Дайджест лучших технологических новостей каждое утро</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 outline-none text-sm"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm">
                Подписаться
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-bold text-gray-900">TechPulse</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 TechPulse. Все права защищены.</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">О нас</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Реклама</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
