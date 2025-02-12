import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, CheckCircle, MessageCircle } from "lucide-react";

export default function LawyerLandingPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header (Hero Section) */}
      <section className="bg-white shadow-md p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Defending Your Rights with Excellence and Transparency</h1>
        <p className="text-lg mb-6">Expert legal services tailored to your needs with personalized attention and proven results.</p>
        <div className="space-x-4">
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">Schedule a Consultation</Button>
          <Button className="bg-gray-200 text-blue-800 px-6 py-3 rounded-2xl">Talk to a Lawyer Now</Button>
        </div>
      </section>

      {/* Social Proof (Credibility) */}
      <section className="bg-gray-100 p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Trusted by Our Clients</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["500+ Cases Successfully Resolved", "Certified by OAB with 10+ Years of Experience", "Awarded Best Law Firm 2024"].map((item, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6 flex items-center justify-center">
                <CheckCircle className="text-green-500 mr-2" />
                <p>{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Description of Services */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Our Areas of Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Civil Law", "Labor Law", "Tax Law"].map((area, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">{area}</h3>
                <p>Providing expert legal solutions with personalized attention and a focus on results.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Conversion Section (Contact Form) */}
      <section className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Get in Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input placeholder="Name" required />
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Phone" type="tel" />
          <Textarea placeholder="Your message" rows={4} required />
          <Button className="w-full bg-blue-600 text-white rounded-2xl">Send Message</Button>
        </form>
      </section>

      {/* About the Lawyer/Office */}
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About Our Firm</h2>
        <p className="max-w-2xl mx-auto mb-4">With over a decade of experience, our team is committed to providing top-tier legal support. We believe in justice, transparency, and personalized service.</p>
        <img src="/lawyer-photo.jpg" alt="Lawyer" className="mx-auto rounded-2xl shadow-md w-48 h-48 object-cover" />
      </section>

      {/* Contact and Location Information */}
      <footer className="bg-blue-800 text-white p-4 text-center">
        <div className="flex justify-center space-x-6">
          <div className="flex items-center space-x-1"><Phone size={16} /> <span>(11) 1234-5678</span></div>
          <div className="flex items-center space-x-1"><Mail size={16} /> <span>contact@lawfirm.com</span></div>
          <div className="flex items-center space-x-1"><MapPin size={16} /> <span>123 Main St, São Paulo, SP</span></div>
        </div>
        <p className="mt-2">© 2025 Law Firm. All Rights Reserved.</p>
      </footer>

      {/* Floating Action Button */}
      <a href="https://wa.me/123456789" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
