'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Award, Users, TrendingUp, Mountain, Factory, Truck } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage(data.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      setSubmitMessage('Terjadi kesalahan server. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                <Mountain className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT MINERAL PERKASA GRUP</h1>
                <p className="text-xs text-slate-600">Nickel Mining Excellence</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-yellow-600 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-700 hover:text-yellow-600 transition-colors">Tentang</a>
              <a href="#services" className="text-slate-700 hover:text-yellow-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-slate-700 hover:text-yellow-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-slate-700 hover:text-yellow-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-slate-700 hover:text-yellow-600 transition-colors">Terms</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-700/90 z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-yellow-600/20"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Mountain className="w-12 h-12 text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              PT <span className="text-yellow-500">MINERAL</span> PERKASA GRUP
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
              Pionir Pertambangan Bijih Nikel Terkemuka di Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tentang Perusahaan</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Keunggulan <span className="text-yellow-500">Pertambangan</span> Kami
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                PT MINERAL PERKASA GRUP adalah perusahaan pertambangan bijih nikel yang berkomitmen 
                untuk memberikan produk berkualitas tinggi dengan standar keselamatan dan keberlanjutan 
                terbaik di industri.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Dengan pengalaman bertahun-tahun dan tim profesional, kami telah menjadi mitra terpercaya 
                dalam memasok bijih nikel berkualitas untuk berbagai industri dalam dan luar negeri.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Berkualitas</h4>
                    <p className="text-sm text-slate-600">Standar Internasional</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Aman</h4>
                    <p className="text-sm text-slate-600">Prioritas Utama</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
                <p className="text-slate-600">Tahun Pengalaman</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-slate-900 mb-2">500K+</div>
                <p className="text-slate-600">Ton Produksi/Tahun</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                <p className="text-slate-600">Profesional Team</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                <p className="text-slate-600">Kepuasan Klien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Eksplorasi & Penambangan</h3>
              <p className="text-slate-600 mb-4">
                Jasa eksplorasi dan penambangan bijih nikel dengan teknologi modern 
                dan metode yang berkelanjutan.
              </p>
              <div className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer">
                Pelajari lebih lanjut <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pengolahan & Pemurnian</h3>
              <p className="text-slate-600 mb-4">
                Fasilitas pengolahan dan pemurnian bijih nikel untuk menghasilkan 
                produk berkualitas tinggi.
              </p>
              <div className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer">
                Pelajari lebih lanjut <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Logistik & Distribusi</h3>
              <p className="text-slate-600 mb-4">
                Sistem logistik dan distribusi yang efisien untuk memastikan 
                pengiriman tepat waktu.
              </p>
              <div className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer">
                Pelajari lebih lanjut <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Informasi <span className="text-yellow-500">Kontak</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Alamat</h4>
                    <p className="text-slate-600">
                      Jalan Martandu lorong rambutan, Desa/Kelurahan Andonohu, 
                      Kec. Poasia, Kota Kendari, Provinsi Sulawesi Tenggara
                    </p>
                    <p className="text-slate-600">Kode Pos: 93231</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Telepon</h4>
                    <p className="text-slate-600">082312042895</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">info@mineralperkasagrup.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nama</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    placeholder="Nama lengkap Anda"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    placeholder="Pesan Anda"
                    required
                  ></textarea>
                </div>
                
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('berhasil') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold">PT MINERAL PERKASA GRUP</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Pionir pertambangan bijih nikel terkemuka di Indonesia dengan komitmen 
                terhadap kualitas, keselamatan, dan keberlanjutan.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-yellow-500 transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-yellow-500 transition-colors">Tentang</a></li>
                <li><a href="#services" className="hover:text-yellow-500 transition-colors">Layanan</a></li>
                <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-yellow-500 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PT MINERAL PERKASA GRUP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}