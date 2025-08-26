import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  const benefits = [
    {
      icon: "Shield",
      title: "Глубокая дезинфекция",
      description: "Сухой туман проникает в самые труднодоступные места автомобиля, обеспечивая 100% дезинфекцию"
    },
    {
      icon: "Droplets", 
      title: "Без влаги",
      description: "Технология не оставляет влаги на поверхностях, исключая риск повреждения электроники"
    },
    {
      icon: "Clock",
      title: "Быстрая обработка",
      description: "Полная обработка автомобиля занимает всего 15-20 минут без времени на просушку"
    },
    {
      icon: "Leaf",
      title: "Экологично",
      description: "Используем только безопасные препараты, не вредящие человеку и окружающей среде"
    },
    {
      icon: "Star",
      title: "Устраняет запахи",
      description: "Полностью нейтрализует неприятные запахи: табак, животные, пища, влага"
    },
    {
      icon: "Target",
      title: "Точное воздействие",
      description: "Микрочастицы тумана достигают каждого уголка салона и кузова автомобиля"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-accent/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-white font-roboto">
                DryFog Auto
              </h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-white hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#benefits" className="text-white hover:text-primary transition-colors">
                Преимущества
              </a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-accent mb-6 font-roboto leading-tight">
                Обработка<br />
                <span className="text-primary">сухим туманом</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Революционная технология дезинфекции и устранения запахов в автомобиле. 
                Без влаги, быстро, эффективно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать обработку
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть процесс
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src="/img/b0738fa0-054c-4be2-81b0-053468fd3626.jpg" 
                  alt="Обработка автомобиля сухим туманом"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6 font-roboto">
              Преимущества <span className="text-primary">сухого тумана</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Инновационная технология, которая превосходит традиционные методы обработки автомобилей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon name={benefit.icon} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-accent mb-3 font-roboto">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6 font-roboto">
              Процесс <span className="text-primary">работы</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная обработка автомобиля сухим туманом состоит из 4 простых этапов
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Icon name="FileText" className="text-white" size={32} />
                  </div>
                  <div className="absolute top-10 left-20 hidden lg:block">
                    <div className="w-32 h-0.5 bg-primary/30 relative">
                      <div className="absolute right-0 top-0 w-0 h-0 border-l-8 border-l-primary/30 border-t-4 border-t-transparent border-b-4 border-b-transparent transform translate-x-1"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-3 font-roboto">
                    Диагностика
                  </h3>
                  <p className="text-gray-600">
                    Осматриваем автомобиль, выявляем проблемные зоны и источники запахов
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Icon name="Settings" className="text-white" size={32} />
                  </div>
                  <div className="absolute top-10 left-20 hidden lg:block">
                    <div className="w-32 h-0.5 bg-primary/30 relative">
                      <div className="absolute right-0 top-0 w-0 h-0 border-l-8 border-l-primary/30 border-t-4 border-t-transparent border-b-4 border-b-transparent transform translate-x-1"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-3 font-roboto">
                    Подготовка
                  </h3>
                  <p className="text-gray-600">
                    Готовим оборудование и подбираем оптимальный состав препаратов
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Icon name="Spray" className="text-white" size={32} />
                  </div>
                  <div className="absolute top-10 left-20 hidden lg:block">
                    <div className="w-32 h-0.5 bg-primary/30 relative">
                      <div className="absolute right-0 top-0 w-0 h-0 border-l-8 border-l-primary/30 border-t-4 border-t-transparent border-b-4 border-b-transparent transform translate-x-1"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-3 font-roboto">
                    Обработка
                  </h3>
                  <p className="text-gray-600">
                    Распыляем сухой туман, который проникает во все труднодоступные места
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Icon name="CheckCircle" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-3 font-roboto">
                    Контроль
                  </h3>
                  <p className="text-gray-600">
                    Проверяем качество обработки и передаем автомобиль владельцу
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-secondary/50 rounded-full px-8 py-4">
                <Icon name="Clock" className="text-primary" size={24} />
                <span className="text-lg font-semibold text-accent">
                  Общее время: 15-20 минут
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-roboto">
              Готовы попробовать <span className="text-primary">сухой туман</span>?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Запишитесь на обработку прямо сейчас и получите скидку 15% на первый визит
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться онлайн
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-accent px-10 py-4 text-lg"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent/95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" className="text-primary" size={28} />
                <h3 className="text-2xl font-bold font-roboto">DryFog Auto</h3>
              </div>
              <p className="text-white/80">
                Профессиональная обработка автомобилей сухим туманом. 
                Качество, скорость, безопасность.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 font-roboto">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={18} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={18} />
                  <span>Пн-Вс: 9:00-21:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 font-roboto">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Дезинфекция салона</li>
                <li>Устранение запахов</li>
                <li>Антибактериальная обработка</li>
                <li>Профилактическая обработка</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 DryFog Auto. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}