"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#FFFAFA]">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069')",
        }}
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Christmas Tree
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Premium Fraser Firs, Noble Firs & Nordmann Firs delivered to your door
          </p>
          <Button
            size="lg"
            className="bg-[#228B22] hover:bg-[#1a6b1a] text-white text-lg px-8 py-6 rounded-full"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            Browse Our Trees
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#228B22] mb-12">Why Choose Evergreen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌲",
                title: "Fresh Cut Daily",
                description: "Trees cut within 24 hours of delivery for maximum freshness",
              },
              {
                icon: "🚚",
                title: "Free Delivery",
                description: "Same-day delivery within 20 miles, free for orders over $100",
              },
              {
                icon: "⭐",
                title: "Setup Included",
                description: "We'll set up your tree stand and add water",
              },
              {
                icon: "✅",
                title: "30-Day Guarantee",
                description: "Not happy? Full refund, no questions asked",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-[#228B22]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#333333]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#228B22] mb-12">Our Premium Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fraser Fir",
                price: "$79 - $199",
                description: "Classic Christmas scent, excellent needle retention",
                image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1974",
              },
              {
                name: "Noble Fir",
                price: "$89 - $219",
                description: "Strong branches, perfect for heavy ornaments",
                image: "https://images.unsplash.com/photo-1576870851032-2e1e2e8e8ccd?q=80&w=1974",
              },
              {
                name: "Nordmann Fir",
                price: "$99 - $249",
                description: "Soft needles, ideal for families with children",
                image: "https://images.unsplash.com/photo-1544279863-d339a37c79a1?q=80&w=2070",
              },
            ].map((tree, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={tree.image}
                    alt={tree.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#228B22]">{tree.name}</CardTitle>
                  <CardDescription className="text-[#9B2335] text-xl font-bold">{tree.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#333333] mb-4">{tree.description}</p>
                  <p className="text-sm text-gray-600 mb-4">Available sizes: 5ft, 6ft, 7ft, 8ft</p>
                  <Button className="w-full bg-[#9B2335] hover:bg-[#7a1c2a] text-white">Order Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#228B22] mb-12">Meet the Evergreen Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tom & Sarah Mitchell",
                role: "Founders",
                bio: "Third-generation tree farmers bringing 50 years of tradition to your home",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974",
              },
              {
                name: "Jake Rodriguez",
                role: "Head of Delivery",
                bio: "Making sure your tree arrives fresh and on time",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
              },
              {
                name: "Emma Chen",
                role: "Customer Care",
                bio: "Here to help you find the perfect tree",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-xl text-[#228B22]">{member.name}</CardTitle>
                  <CardDescription className="text-[#9B2335] font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#333333]">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#228B22] mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#228B22]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#9B2335] mt-1" />
                    <div>
                      <p className="font-semibold text-[#228B22]">Address</p>
                      <p className="text-[#333333]">123 Pine Tree Lane, Portland, OR 97201</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#9B2335] mt-1" />
                    <div>
                      <p className="font-semibold text-[#228B22]">Phone</p>
                      <p className="text-[#333333]">(503) 555-TREE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-[#9B2335] mt-1" />
                    <div>
                      <p className="font-semibold text-[#228B22]">Hours</p>
                      <p className="text-[#333333]">Mon-Sun 9AM - 8PM (Nov 15 - Dec 24)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#228B22]">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-[#228B22]">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-[#228B22]/30 focus:border-[#228B22]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#228B22]">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-[#228B22]/30 focus:border-[#228B22]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#228B22]">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-[#228B22]/30 focus:border-[#228B22]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-[#228B22]">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-[#228B22]/30 focus:border-[#228B22]"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#228B22] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Evergreen Christmas Trees</h3>
              <p className="text-white/80">Find Your Perfect Tree This Holiday Season</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">
                    Trees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2025 Evergreen Christmas Trees. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
