'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">PT MINERAL PERKASA GRUP</h1>
                  <p className="text-xs text-slate-600">Nickel Mining Excellence</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-yellow-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-yellow-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="text-slate-700 hover:text-yellow-600 transition-colors">Terms</Link>
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
              <Link href="/" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-yellow-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Shield className="w-12 h-12 text-slate-900" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kebijakan <span className="text-yellow-500">Privasi</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Perlindungan data dan privasi Anda adalah prioritas utama kami
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            <div className="mb-8">
              <p className="text-slate-600 leading-relaxed">
                Kebijakan Privasi ini menjelaskan bagaimana <strong>PT MINERAL PERKASA GRUP</strong> 
                mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
                ketika Anda mengunjungi website kami atau menggunakan layanan kami.
              </p>
            </div>

            <div className="space-y-8">
              {/* Informasi yang Kami Kumpulkan */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Informasi yang Kami Kumpulkan</h2>
                </div>
                <div className="ml-15 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Informasi Pribadi</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat perusahaan atau rumah</li>
                      <li>Informasi kontak lainnya yang Anda berikan secara sukarela</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Informasi Teknis</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                      <li>Alamat IP</li>
                      <li>Jenis browser</li>
                      <li>Informasi perangkat</li>
                      <li>Data penggunaan website</li>
                      <li>Cookies dan data tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Penggunaan Informasi */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Penggunaan Informasi</h2>
                </div>
                <div className="ml-15">
                  <p className="text-slate-600 mb-4">
                    Kami menggunakan informasi yang dikumpulkan untuk:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Menyediakan layanan dan dukungan pelanggan</li>
                    <li>Memproses permintaan dan transaksi bisnis</li>
                    <li>Mengirimkan informasi produk dan layanan</li>
                    <li>Memperbaiki kualitas website dan layanan kami</li>
                    <li>Melakukan analisis pasar dan penelitian</li>
                    <li>Memenuhi kewajiban hukum dan peraturan</li>
                  </ul>
                </div>
              </div>

              {/* Perlindungan Data */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Perlindungan Data</h2>
                </div>
                <div className="ml-15">
                  <p className="text-slate-600 mb-4">
                    <strong>PT MINERAL PERKASA GRUP</strong> berkomitmen untuk melindungi data pribadi Anda:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Enkripsi data sensitif dengan teknologi terkini</li>
                    <li>Akses terbatas untuk informasi pribadi</li>
                    <li>Keamanan fisik dan digital di fasilitas kami</li>
                    <li>Audit keamanan berkala</li>
                    <li>Pelatihan staf tentang perlindungan data</li>
                  </ul>
                </div>
              </div>

              {/* Hak Pengguna */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Hak Anda sebagai Pengguna</h2>
                </div>
                <div className="ml-15">
                  <p className="text-slate-600 mb-4">
                    Anda memiliki hak untuk:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Mengakses informasi pribadi yang kami simpan</li>
                    <li>Memperbaiki data yang tidak akurat</li>
                    <li>Menghapus data pribadi Anda</li>
                    <li>Menolak penggunaan data untuk tujuan pemasaran</li>
                    <li>Meminta salinan data pribadi Anda</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kebijakan Cookies</h2>
                <p className="text-slate-600 mb-4">
                  Website kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mempersonalisasi pengalaman pengguna</li>
                  <li>Menyediakan fitur keamanan</li>
                </ul>
              </div>

              {/* Perubahan Kebijakan */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Perubahan Kebijakan</h2>
                <p className="text-slate-600">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                  diberitahukan melalui website kami atau email. Penggunaan terus menerus website 
                  kami setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
                </p>
              </div>

              {/* Kontak */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
                <p className="text-slate-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data 
                  pribadi Anda, silakan hubungi kami:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-2"><strong>PT MINERAL PERKASA GRUP</strong></p>
                  <p className="text-slate-600 mb-1">Jalan Martandu lorong rambutan, Desa/Kelurahan Andonohu</p>
                  <p className="text-slate-600 mb-1">Kec. Poasia, Kota Kendari, Provinsi Sulawesi Tenggara</p>
                  <p className="text-slate-600 mb-1">Kode Pos: 93231</p>
                  <p className="text-slate-600 mb-1">Telepon: 082312042895</p>
                  <p className="text-slate-600">Email: privacy@mineralperkasagrup.com</p>
                </div>
              </div>

              {/* Effective Date */}
              <div className="border-t pt-6">
                <p className="text-sm text-slate-500 text-center">
                  Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024
                </p>
              </div>
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
                  <Shield className="w-6 h-6 text-slate-900" />
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
                <li><Link href="/" className="hover:text-yellow-500 transition-colors">Beranda</Link></li>
                <li><Link href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-yellow-500 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-yellow-500 transition-colors">Terms & Conditions</Link></li>
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