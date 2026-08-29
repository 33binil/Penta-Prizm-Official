// Studio data and lookbook collection in JavaScript

export const NAV_LINKS = [
  { id: 'about', label: 'ABOUT THE STUDIO', href: '#about' },
  { id: 'works', label: 'OUR WORKS', href: '#works' },
  { id: 'what-we-do', label: 'WHAT WE DO', href: '#what-we-do' },
  { id: 'process', label: 'PROCESS', href: '#process' },
  { id: 'contacts', label: 'CONTACTS', href: '#contacts' },
];

export const MARQUEE_ITEMS = [
  'STREET ID',
  'НОВАЯ КОЛЛЕКЦИЯ',
  'КАСТОМИЗАЦИЯ ОДЕЖДЫ',
  'ТВОЙ СТИЛЬ',
  'STREET ID',
  'LIMITED DROP 2026',
  'HANDMADE CUSTOM',
  'RETHINK FASHION',
];

export const SERVICES = [
  {
    id: 'projects',
    title: 'КАСТОМ ДЛЯ ПРОЕКТОВ',
    desc: 'Музыканты, бренды, визуальные проекты',
    tag: 'STREET ENERGY',
    features: ['Сценический гардероб для клипов и туров', 'Лимитированный брендированный мерч', 'Разработка уникального арт-стиля'],
    colSpan: 'col-span-12 md:col-span-6',
  },
  {
    id: 'design',
    title: 'АВТОРСКИЙ ДИЗАЙН',
    desc: 'Выпускаем собственные авторские коллекции',
    tag: 'ORIGINAL DROP',
    features: ['Эксклюзивный анатомический крой', 'Авторские графические принты и вышивка', 'Ограниченные тиражи (1 of 1 / 1 of 10)'],
    colSpan: 'col-span-12 md:col-span-6',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'custom',
    title: 'КАСТОМ ОДЕЖДЫ',
    desc: 'Создаём концепцию под тебя',
    tag: 'DONT COPY — CREATE',
    features: ['Ручная аэрография и шелкография', 'Металлическая фурнитура и заклепки', 'Персонализация под анатомию и вайб'],
    colSpan: 'col-span-12 md:col-span-6',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'upcycling',
    title: 'АПСАЙКЛИНГ',
    desc: 'Подарим старой вещи новый стиль',
    tag: 'SUSTAINABLE PUNK',
    features: ['Реконструкция винтажных кожанок и денима', 'Пэчворк и деконструкция швов', 'Экологичное перерождение любимых вещей'],
    colSpan: 'col-span-12 md:col-span-6',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
  },
];

export const LOOKBOOK_ITEMS = [
  {
    id: '1',
    title: 'CYBER-LEATHER JACKET "ACID GLITCH"',
    category: 'Куртки',
    type: '1 of 1 Custom',
    year: '2026',
    price: '34 000 ₽',
    status: 'В наличии',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80',
    modelImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    description: 'Винтажная тяжелая воловья кожа, ручная роспись флуоресцентным акрилом, титановые шипы и состаренные молнии YKK.',
    details: ['Материал: 100% натуральная кожа', 'Ручная работа: 42 часа', 'Размер: Oversize L-XL', 'Водостойкое покрытие финишем'],
  },
  {
    id: '2',
    title: 'DECONSTRUCTED RAW HOODIE "NO FUTURE"',
    category: 'Худи',
    type: 'Drop Edition',
    year: '2026',
    price: '14 500 ₽',
    status: 'Под заказ',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
    modelImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    description: 'Плотный футер 520 г/м² с необработанными краями, двойной капюшон-шлем, термохромный принт, меняющий цвет от тепла.',
    details: ['Плотность: 520 gsm', 'Крой: Boxy fit', 'Эффект состаривания ткани Stone-wash'],
  },
  {
    id: '3',
    title: 'DISTRESSED PATCHWORK CARGO "VOID"',
    category: 'Джинсы',
    type: 'Upcycle Series',
    year: '2026',
    price: '19 800 ₽',
    status: 'В наличии',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    modelImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    description: 'Собраны из трех пар японского денима разной плотности. 8 карманов, съемные стропы на карабинах Cobra.',
    details: ['Японский селвидж-деним 14oz', 'Съемные тактические стропы', 'Ручные стежки Sashiko'],
  },
  {
    id: '4',
    title: 'HEAVYWEIGHT OVERSIZE BOMBER "TOKYO NIGHTS"',
    category: 'Куртки',
    type: 'Limited Run',
    year: '2026',
    price: '28 500 ₽',
    status: 'Под заказ',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80',
    modelImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    description: 'Утепленный бомбер с объемной вышивкой на спине, водоотталкивающий нейлон Cordura, контрастная оранжевая подкладка.',
    details: ['Водостойкая мембрана Cordura', 'Утеплитель Thinsulate 150g', 'Шелковая вышивка 120 000 стежков'],
  },
  {
    id: '5',
    title: 'CUSTOM HARDWARE HARNESS BAG',
    category: 'Аксессуары',
    type: '1 of 1 Custom',
    year: '2026',
    price: '9 200 ₽',
    status: 'В наличии',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    modelImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
    description: 'Модульная сумка-портупея из баллистического нейлона с металлическими фастексами и лазерной гравировкой.',
    details: ['Баллистический нейлон 1000D', 'Стальная фурнитура', 'Регулируемая посадка на любую фигуру'],
  },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'DISCOVER & UNDERSTAND',
    desc: 'We start by understanding your business, goals, target audience, market, and requirements. Every project begins with a clear understanding of what you want to achieve.',
  },
  {
    num: '02',
    title: 'STRATEGY & DIRECTION',
    desc: 'We develop the right creative and digital strategy for your project, defining the direction, approach, content, technology, and execution plan.',
  },
  {
    num: '03',
    title: 'CREATE & DESIGN',
    desc: 'Our creative team transforms the strategy into compelling visuals, brand identities, content, UI/UX, and digital experiences — with professional photography, videography, and video editing bringing every concept to life.',
  },
  {
    num: '04',
    title: 'DEVELOP & EXECUTE',
    desc: 'We bring the approved concept to life through professional development, content production, marketing campaigns, and digital implementation.',
  },
  {
    num: '05',
    title: 'ANALYZE & OPTIMIZE',
    desc: 'We evaluate performance, user engagement, campaign results, and overall effectiveness to identify opportunities for improvement.',
  },
  {
    num: '06',
    title: 'GROW & EVOLVE',
    desc: 'We continuously refine and improve your digital presence to create long-term value and support sustainable business growth.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'MARKUL / TOUR OUTFITS',
    role: 'Музыкальный проект',
    quote: 'Собрали сценические куртки за 4 дня до тура. Выдержали 28 концертов и литры сценического дыма. Вайб безупречный.',
    tag: '#STAGE_CUSTOM',
  },
  {
    name: 'AGENCY "STVOL"',
    role: 'Рекламный продакшн',
    quote: 'Кастомные худи для съемочной группы стали главной темой бэкстейджа. Качество ткани и печати на высшем уровне.',
    tag: '#PROD_MERCH',
  },
  {
    name: 'ALEXANDER K.',
    role: 'Частный клиент',
    quote: 'Отдал старую косуху отца 90-х годов. Ребята сделали из нее арт-объект, который теперь собирает взгляды на улицах.',
    tag: '#UPCYCLING_HERO',
  },
];
