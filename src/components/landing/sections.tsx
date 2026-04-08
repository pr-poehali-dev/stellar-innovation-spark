import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Новости технологий — каждый день</Badge>,
    title: "Всё важное в мире технологий.",
    showButton: true,
    buttonText: 'Читать новости',
    heroImage: 'https://cdn.poehali.dev/projects/e52e6dde-b3bf-47c9-b0de-a7448b833182/files/3cc2dc08-9327-42e0-a399-8ef292975914.jpg'
  },
  {
    id: 'about',
    title: 'Зачем нам доверяют?',
    content: 'Мы собираем самые актуальные новости из сотен источников: AI, стартапы, гаджеты, кибербезопасность — всё в одном месте без лишнего шума.'
  },
  {
    id: 'features',
    title: 'Что вы найдёте здесь',
    content: 'Искусственный интеллект, блокчейн, космические технологии, новые гаджеты и обзоры — отфильтрованные и отсортированные по важности специально для вас.'
  },
  {
    id: 'testimonials',
    title: 'Читают тысячи',
    content: 'Разработчики, инвесторы и просто любопытные люди — каждый день узнают о главных событиях в мире технологий раньше других.'
  },
  {
    id: 'join',
    title: 'Будьте первыми',
    content: 'Подпишитесь на дайджест и получайте главные технологические новости прямо в почту — каждое утро, без спама.',
    showButton: true,
    buttonText: 'Подписаться'
  },
]