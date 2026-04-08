import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import type { NewsItem } from '@/data/news'
import { categoryColors } from '@/data/news'

interface NewsCardProps {
  item: NewsItem
  featured?: boolean
}

export default function NewsCard({ item, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <Link to={`/news/${item.id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 h-[480px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[item.category]}`}>
              {item.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 group-hover:text-blue-300 transition-colors">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm line-clamp-2 mb-4">{item.excerpt}</p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>{item.author}</span>
              <span>·</span>
              <span>{item.date}</span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={14} />
                <span>{item.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/news/${item.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div className="overflow-hidden h-48">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${categoryColors[item.category]}`}>
            {item.category}
          </span>
          <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.excerpt}</p>
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span>{item.date}</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={12} />
              <span>{item.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
