import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Award, Users, CheckCircle2, ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import { translations } from './translations';

type Language = 'en' | 'br' | 'pt' | 'de';

const languageFlags: Record<Language, { src: string, alt: string }> = {
  'en': {
    src: '/assets/images/uk.png',
    alt: 'UK Flag'
  },
  'br': {
    src: '/assets/images/br.png',
    alt: 'Brazil Flag'
  },
  'pt': {
    src: '/assets/images/pt.png',
    alt: 'Portugal Flag'
  },
  'de': {
    src: '/assets/images/de.png',
    alt: 'German Flag'
  }
};

function App() {
  const [offset, setOffset] = useState(0);
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Language Selection */}
      <div className="fixed top-14 left-7 flex gap-3 z-50">
        {(['en', 'br', 'pt', 'de'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`w-7 h-7 rounded-full flex flex-col items-center justify-center text-sm font-bold transition-all overflow-hidden ${
              language === lang
                ? 'ring-2 ring-blue-600 ring-offset-2'
                : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
            }`}
          >
            <div className="w-full h-full relative">
              <img
                src={languageFlags[lang].src}
                alt={languageFlags[lang].alt}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 flex items-center justify-center bg-black/40 ${
                language === lang ? 'bg-blue-600/40' : 'hover:bg-black/20'
              }`}>
                <span className="text-white text-xs font-bold">
                  {lang === 'en' ? 'EN' : lang === 'br' ? 'BR' : lang === 'pt' ? 'PT' : 'DE'}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${offset * 0.5}px)` }}>
          <img
            src="/assets/images/law-office.jpg"
            alt="Law Office"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <nav className="fixed top-0 left-0 right-0 py-6 z-40 bg-gradient-to-b from-gray-900/80 to-transparent">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">MELLO ASSOCIATES</h1>
                <div className="hidden md:flex space-x-8">
                  <a href="#services" className="text-white hover:text-gray-300">{t.nav.services}</a>
                  <a href="#about" className="text-white hover:text-gray-300">{t.nav.about}</a>
                  <a href="#testimonials" className="text-white hover:text-gray-300">{t.nav.testimonials}</a>
                  <a href="#contact" className="text-white hover:text-gray-300">{t.nav.contact}</a>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="max-w-3xl" style={{ transform: `translateY(${offset * 0.2}px)` }}>
            <h2 className="text-5xl font-bold text-white mb-6">{t.hero.title}</h2>
            <p className="text-xl text-gray-200 mb-8">{t.hero.subtitle}</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                <a href="https://wa.me/+5571991395996/?text=urlencodedtex" target="_blank" >
                  {t.hero.buttons.consultation}
                </a>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
                <a href="https://www.linkedin.com/in/ol%C3%ADmpio-mello/" target="_blank" >
                  {t.hero.buttons.learnMore}
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg">{t.stats.casesWon}</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg">{t.stats.experience}</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-lg">{t.stats.satisfaction}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.services.realEstate.title, description: t.services.realEstate.description, icon: <MapPin className="w-8 h-8 mb-4" /> },
              { title: t.services.corporate.title, description: t.services.corporate.description, icon: <Users className="w-8 h-8 mb-4" /> },
              { title: t.services.civil.title, description: t.services.civil.description, icon: <MessageSquare className="w-8 h-8 mb-4" /> },
            ].map((service, index) => (
              <div key={index} className="p-8 border rounded-lg hover:shadow-lg transition">
                {service.icon}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 flex items-center">
                  {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/images/olimpio_lawyer.png"
                alt="Olímpio Lawyer"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">{t.about.title}</h2>
              <p className="text-gray-600 mb-6">{t.about.description}</p>
              <div className="space-y-4">
                {t.about.credentials.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">{t.contact.title}</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+49 176 66437172</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>oli.melloadv@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>Colônia, Renânia do Norte-Vestfália, Alemanha</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                {/* <a href="#" className="hover:text-blue-400"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400"><Twitter className="w-6 h-6" /></a> */}
                <a href="https://www.linkedin.com/in/ol%C3%ADmpio-mello/" target='_blank' className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder={t.contact.form.message}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;