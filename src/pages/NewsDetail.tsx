import { useParams, Link, useNavigate } from 'react-router-dom'
import Header from '@/components/news/Header'
import NewsCard from '@/components/news/NewsCard'
import { news, categoryColors } from '@/data/news'
import Icon from '@/components/ui/icon'

export default function NewsDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = news.find(n => n.id === id)
  const related = news.filter(n => n.id !== id && n.category === item?.category).slice(0, 3)

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <Icon name="FileQuestion" size={64} className="text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Новость не найдена</h1>
          <Link to="/" className="text-blue-600 hover:underline">Вернуться на главную</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
        >
          <Icon name="ArrowLeft" size={18} />
          <span className="text-sm font-medium">Назад</span>
        </button>

        {/* Article Header */}
        <article>
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[item.category]}`}>
              {item.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {item.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon name="User" size={14} className="text-blue-600" />
              </div>
              <span className="font-medium text-gray-700">{item.author}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>{item.date}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{item.readTime} чтения</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden mb-8 h-64 md:h-96">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">{item.excerpt}</p>
            {item.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5">{para}</p>
            ))}
          </div>

          {/* Share */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Поделиться:</span>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
              <Icon name="Share2" size={14} />
              Поделиться
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              <Icon name="Bookmark" size={14} />
              Сохранить
            </button>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Читайте также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(r => (
                <NewsCard key={r.id} item={r} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
