import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const menuItems = {
  'Яичница': [
    { name: 'Классическая яичница', description: 'С хлебом и зеленью', price: 'Бесплатно', emoji: '🍳' },
    { name: 'Омлет с сыром', description: 'Пышный омлет с моцареллой', price: 'Бесплатно', emoji: '🧀' },
    { name: 'Яйца-пашот', description: 'На тосте с авокадо', price: 'Бесплатно', emoji: '🥑' },
  ],
  'Коктейли': [
    { name: 'Новогодний пунш', description: 'Апельсин, корица, гвоздика', price: 'Бесплатно', emoji: '🍹' },
    { name: 'Зимний мохито', description: 'С клюквой и мятой', price: 'Бесплатно', emoji: '🍸' },
    { name: 'Горячий шоколад', description: 'С маршмеллоу', price: 'Бесплатно', emoji: '☕' },
  ],
  'Салаты': [
    { name: 'Цезарь', description: 'Курица, сыр пармезан, соус', price: 'Бесплатно', emoji: '🥗' },
    { name: 'Греческий', description: 'Свежие овощи, фета, оливки', price: 'Бесплатно', emoji: '🍅' },
    { name: 'Оливье', description: 'Праздничная классика', price: 'Бесплатно', emoji: '🥔' },
  ],
  'Кофе': [
    { name: 'Эспрессо', description: 'Крепкий классический', price: 'Бесплатно', emoji: '☕' },
    { name: 'Капучино', description: 'С нежной пенкой', price: 'Бесплатно', emoji: '🥛' },
    { name: 'Латте с корицей', description: 'Новогодняя версия', price: 'Бесплатно', emoji: '🎄' },
  ],
  'Мороженое': [
    { name: 'Ванильное', description: 'Классический вкус', price: 'Бесплатно', emoji: '🍦' },
    { name: 'Шоколадное', description: 'Насыщенный шоколад', price: 'Бесплатно', emoji: '🍫' },
    { name: 'Клубничное', description: 'Свежие ягоды', price: 'Бесплатно', emoji: '🍓' },
  ],
  'Сухари': [
    { name: 'Чесночные', description: 'Хрустящие с чесноком', price: 'Бесплатно', emoji: '🧄' },
    { name: 'С сыром', description: 'Пармезан и травы', price: 'Бесплатно', emoji: '🧀' },
    { name: 'Ржаные', description: 'С тмином', price: 'Бесплатно', emoji: '🍞' },
  ],
  'Соки': [
    { name: 'Апельсиновый', description: 'Свежевыжатый', price: 'Бесплатно', emoji: '🍊' },
    { name: 'Яблочный', description: 'Домашний', price: 'Бесплатно', emoji: '🍎' },
    { name: 'Клюквенный морс', description: 'Зимний напиток', price: 'Бесплатно', emoji: '🫐' },
  ],
};



const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [orders, setOrders] = useState<Array<{id: number, item: string, category: string, time: string}>>([]);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = '❄️';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.opacity = String(Math.random() * 0.5 + 0.3);
      document.body.appendChild(snowflake);
      
      setTimeout(() => snowflake.remove(), 8000);
    };

    const interval = setInterval(createSnowflake, 300);
    return () => clearInterval(interval);
  }, []);

  const addOrder = (item: string, category: string) => {
    const newOrder = {
      id: Date.now(),
      item,
      category,
      time: new Date().toLocaleTimeString('ru-RU')
    };
    setOrders([newOrder, ...orders]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🎄</span>
              <h1 className="text-3xl font-bold text-red-600">Кафе-55</h1>
            </div>
            <div className="flex gap-6">
              {['home', 'menu', 'contacts', 'admin'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeSection === section
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-red-100'
                  }`}
                >
                  {section === 'home' && '🏠 Главная'}
                  {section === 'menu' && '📋 Меню'}
                  {section === 'contacts' && '📞 Контакты'}
                  {section === 'admin' && '⚙️ Админ'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="container mx-auto px-4 py-12">
          <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <div className="bg-gradient-to-br from-red-600 via-green-700 to-red-800 h-96 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-6xl font-bold mb-4 drop-shadow-2xl">
                  С Новым Годом! 🎉
                </h2>
                <p className="text-2xl mb-6 drop-shadow-lg">
                  Праздничное кафе, где всё бесплатно!
                </p>
                <div className="flex justify-center gap-4 text-5xl">
                  ❄️ 🎄 ⭐ 🎁 🔔
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-12">
            {Object.keys(menuItems).map((category, idx) => (
              <Card
                key={category}
                className="p-6 text-center cursor-pointer transition-all hover:scale-105 hover:shadow-2xl border-2 border-yellow-400 bg-gradient-to-br from-white to-yellow-50"
                onClick={() => setActiveSection('menu')}
              >
                <div className="text-5xl mb-3">
                  {['🍳', '🍹', '🥗', '☕', '🍦', '🍞', '🧃'][idx]}
                </div>
                <h3 className="font-bold text-xl text-gray-800">{category}</h3>
                <p className="text-sm text-gray-600 mt-2">Всё бесплатно!</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-600 mb-6">🎊 Новогодняя атмосфера 🎊</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Приходите в наше уютное кафе и насладитесь праздничной атмосферой! 
              У нас всё бесплатно весь декабрь - наш подарок вам! 🎁
            </p>
          </div>
        </div>
      )}

      {activeSection === 'menu' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-5xl font-bold text-center text-red-600 mb-8">
            🎄 Праздничное меню 🎄
          </h2>
          
          <Tabs defaultValue="Яичница" className="w-full">
            <TabsList className="grid grid-cols-7 w-full mb-8 h-auto bg-red-100">
              {Object.keys(menuItems).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white py-3"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-3 gap-6">
                  {items.map((item) => (
                    <Card key={item.name} className="p-6 hover:shadow-xl transition-all border-2 border-yellow-300">
                      <div className="text-center mb-4">
                        <span className="text-6xl">{item.emoji}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-green-600 text-white text-lg px-4 py-1">
                          {item.price}
                        </Badge>
                        <button
                          onClick={() => addOrder(item.name, category)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                        >
                          Взять
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}



      {activeSection === 'contacts' && (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-5xl font-bold text-center text-red-600 mb-8">
            📞 Контакты
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-8 border-4 border-red-300">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="MapPin" size={32} className="text-red-600" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Адрес</h3>
                  <p className="text-gray-700">г. Москва, ул. Праздничная, д. 55</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Clock" size={32} className="text-green-600" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Время работы</h3>
                  <p className="text-gray-700">Ежедневно: 9:00 - 23:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={32} className="text-yellow-600" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Телефон</h3>
                  <p className="text-gray-700">+7 (495) 555-55-55</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-4 border-green-300">
              <h3 className="font-bold text-xl mb-4">Как нас найти</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Карта</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-6 p-8 border-4 border-yellow-300 bg-gradient-to-br from-yellow-50 to-white">
            <h3 className="font-bold text-xl mb-4 text-center">📱 Мы в социальных сетях</h3>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📘</div>
                <p className="text-sm text-gray-600">Facebook</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm text-gray-600">Instagram</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🐦</div>
                <p className="text-sm text-gray-600">Twitter</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💬</div>
                <p className="text-sm text-gray-600">Telegram</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeSection === 'admin' && (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h2 className="text-5xl font-bold text-center text-red-600 mb-8">
            ⚙️ Панель управления заказами
          </h2>
          
          <Card className="p-6 border-4 border-red-300">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Активные заказы</h3>
              <Badge className="bg-green-600 text-white text-lg px-4 py-2">
                Всего: {orders.length}
              </Badge>
            </div>

            {orders.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-gray-300" />
                <p className="text-xl">Заказов пока нет</p>
                <p className="text-sm mt-2">Заказы будут отображаться здесь</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Badge className="bg-red-600 text-white">#{order.id}</Badge>
                      <div>
                        <p className="font-bold text-lg">{order.item}</p>
                        <p className="text-sm text-gray-600">{order.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">{order.time}</span>
                      <button
                        onClick={() => setOrders(orders.filter(o => o.id !== order.id))}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                      >
                        Выполнен
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <Card className="p-6 text-center border-2 border-green-300 bg-green-50">
              <Icon name="CheckCircle" size={48} className="mx-auto mb-3 text-green-600" />
              <h3 className="text-3xl font-bold text-green-700 mb-2">{orders.length}</h3>
              <p className="text-gray-600">Активных заказов</p>
            </Card>
            <Card className="p-6 text-center border-2 border-blue-300 bg-blue-50">
              <Icon name="Users" size={48} className="mx-auto mb-3 text-blue-600" />
              <h3 className="text-3xl font-bold text-blue-700 mb-2">45</h3>
              <p className="text-gray-600">Гостей сегодня</p>
            </Card>
            <Card className="p-6 text-center border-2 border-purple-300 bg-purple-50">
              <Icon name="Star" size={48} className="mx-auto mb-3 text-purple-600" />
              <h3 className="text-3xl font-bold text-purple-700 mb-2">4.9</h3>
              <p className="text-gray-600">Средний рейтинг</p>
            </Card>
          </div>
        </div>
      )}

      <footer className="bg-gradient-to-r from-red-600 via-green-700 to-red-600 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🎄 ❄️ 🎁 ⭐ 🔔</div>
          <p className="text-xl font-bold mb-2">Кафе-55</p>
          <p className="mb-4">С Новым Годом! Приходите к нам за праздничным настроением! 🎊</p>
          <p className="text-sm opacity-80">© 2025 Кафе-55. Всё меню бесплатно весь декабрь!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;