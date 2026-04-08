import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '@/components/news/Header'
import NewsCard from '@/components/news/NewsCard'
import { news, categories, categoryColors } from '@/data/news'
import type { Category } from '@/data/news'
import Icon from '@/components/ui/icon'

const categoryIcons: Record<Category, string> = {
  'AI': 'Brain',
  'Гаджеты': 'Smartphone',
  'Стартапы': 'Rocket',
  'Безопасность': 'Shield',
  'Наука': 'FlaskConical',
}

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCat = searchParams.get('cat') as Category | null
  const [activeCategory, setActiveCategory] = useState<Category>(initialCat || 'AI')

  const handleSelect = (cat: Category) => {
    setActiveCategory(cat)
    setSearchParams({ cat })
  }

  const filtered = news.filter(n => n.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Категории</h1>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleSelect(cat)}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                activeCategory === cat
                  ? 'border-blue-500 bg-blue-50 shadow-md scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeCategory === cat ? 'bg-blue-600' : 'bg-gray-100'}`}>
                <Icon name={categoryIcons[cat]} size={22} className={activeCategory === cat ? 'text-white' : 'text-gray-500'} />
              </div>
              <span className={`text-sm font-semibold ${activeCategory === cat ? 'text-blue-600' : 'text-gray-700'}`}>{cat}</span>
              <span className="text-xs text-gray-400">
                {news.filter(n => n.category === cat).length} статей
              </span>
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[activeCategory]}`}>{activeCategory}</span>
          <h2 className="text-xl font-bold text-gray-900">— {filtered.length} материала</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <Icon name="Inbox" size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">В этой категории пока нет новостей</p>
          </div>
        )}
      </main>
    </div>
  )
}
