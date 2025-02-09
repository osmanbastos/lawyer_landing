import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Award, Users, CheckCircle2, ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/assets/background.avif"
            alt="Law Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <nav className="absolute top-0 left-0 right-0 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-bold">ANDERSON LAW</h1>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-white hover:text-gray-300">Services</a>
                <a href="#about" className="text-white hover:text-gray-300">About</a>
                <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
              </div>
            </div>
          </nav>
          
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold text-white mb-6">Defending Your Rights with Excellence and Integrity</h2>
            <p className="text-xl text-gray-200 mb-8">Expert legal representation tailored to your unique needs. We fight for justice, protecting your interests every step of the way.</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg">Cases Won</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Corporate Law', icon: <Users className="w-8 h-8 mb-4" /> },
              { title: 'Civil Litigation', icon: <MessageSquare className="w-8 h-8 mb-4" /> },
              { title: 'Real Estate Law', icon: <MapPin className="w-8 h-8 mb-4" /> },
            ].map((service, index) => (
              <div key={index} className="p-8 border rounded-lg hover:shadow-lg transition">
                {service.icon}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">Comprehensive legal solutions tailored to your specific needs.</p>
                <a href="#" className="text-blue-600 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
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
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                alt="Senior Lawyer"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About James Anderson</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in corporate and civil litigation, James Anderson has established himself as a trusted legal advisor to businesses and individuals alike.
              </p>
              <div className="space-y-4">
                {[
                  'Harvard Law School Graduate',
                  'Board Certified Civil Trial Specialist',
                  'Member of the American Bar Association',
                ].map((item, index) => (
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
          <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "James's expertise and dedication to our case was exceptional. Highly recommended!",
                author: "Sarah Johnson",
                position: "CEO, Tech Solutions Inc."
              },
              {
                text: "Professional, knowledgeable, and always available when we needed guidance.",
                author: "Michael Chen",
                position: "Real Estate Developer"
              },
              {
                text: "The best legal representation I could have asked for. Outstanding results!",
                author: "Emily Rodriguez",
                position: "Small Business Owner"
              }
            ].map((testimonial, index) => (
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
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>contact@andersonlaw.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>123 Legal Street, New York, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="hover:text-blue-400"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Anderson Law. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;