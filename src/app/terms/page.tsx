'use client'

import { useState } from 'react'
import { Menu, X, FileText, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
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
                  <Gavel className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">PT MINERAL PERKASA GRUP</h1>
                  <p className="text-xs text-slate-600">Nickel Mining Excellence</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-yellow-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-slate-700 hover:text-yellow-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-yellow-600 font-semibold">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-slate-700 hover:text-yellow-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-yellow-600 font-semibold">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Gavel className="w-12 h-12 text-slate-900" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Syarat & <span className="text-yellow-500">Ketentuan</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Ketentuan penggunaan website dan layanan PT MINERAL PERKASA GRUP
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
                Selamat datang di website <strong>PT MINERAL PERKASA GRUP</strong>. 
                Dengan mengakses dan menggunakan website kami, Anda setuju untuk mematuhi 
                Syarat dan Ketentuan berikut ini.
              </p>
            </div>

            <div className="space-y-8">
              {/* Penerimaan Syarat */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Penerimaan Syarat</h2>
                </div>
                <div className="ml-15">
                  <p className="text-slate-600 mb-4">
                    Dengan menggunakan website ini, Anda menyatakan bahwa:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini</li>
                    <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                    <li>Anda memiliki kapasitas hukum untuk mengikatkan diri dalam perjanjian</li>
                    <li>Anda akan mematuhi semua hukum dan peraturan yang berlaku</li>
                  </ul>
                </div>
              </div>

              {/* Deskripsi Layanan */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Deskripsi Layanan</h2>
                </div>
                <div className="ml-15">
                  <p className="text-slate-600 mb-4">
                    <strong>PT MINERAL PERKASA GRUP</strong> menyediakan:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Informasi tentang layanan pertambangan bijih nikel</li>
                    <li>Platform komunikasi bisnis dan konsultasi</li>
                    <li>Portal untuk permintaan penawaran dan kerjasama</li>
                    <li>Informasi perusahaan dan berita industri</li>
                    <li>Layanan pelanggan dan dukungan teknis</li>
                  </ul>
                </div>
              </div>

              {/* Kewajiban Pengguna */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kewajiban Pengguna</h2>
                <p className="text-slate-600 mb-4">
                  Sebagai pengguna website, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Tidak menggunakan website untuk kegiatan ilegal atau tidak etis</li>
                  <li>Tidak mengirimkan materi yang berbahaya, virus, atau malware</li>
                  <li>Menghormati hak kekayaan intelektual milik PT MINERAL PERKASA GRUP</li>
                  <li>Tidak mencoba mengakses sistem secara tidak sah</li>
                  <li>Tidak mengganggu operasional website</li>
                </ul>
              </div>

              {/* Hak Kekayaan Intelektual */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Hak Kekayaan Intelektual</h2>
                </div>
                <div className="ml-15">
                  <p className="text-slate-600 mb-4">
                    Semua konten di website ini dilindungi oleh hak cipta dan merek dagang:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Nama "PT MINERAL PERKASA GRUP" adalah merek dagang terdaftar</li>
                    <li>Logo, desain, dan grafis adalah hak milik eksklusif</li>
                    <li>Konten teks, gambar, dan video dilindungi hak cipta</li>
                    <li>Tidak diperbolehkan reproduksi tanpa izin tertulis</li>
                  </ul>
                </div>
              </div>

              {/* Pembatasan Tanggung Jawab */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Pembatasan Tanggung Jawab</h2>
                </div>
                <div className="ml-15">
                  <p className="text-slate-600 mb-4">
                    PT MINERAL PERKASA GRUP tidak bertanggung jawab atas:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Kerugian langsung atau tidak langsung dari penggunaan website</li>
                    <li>Ketersediaan layanan yang terganggu karena maintenance</li>
                    <li>Kekeliruan informasi meskipun telah berusaha akurat</li>
                    <li>Kerusakan sistem akibat force majeure</li>
                    <li>Konten dari pihak ketiga yang terhubung dengan website kami</li>
                  </ul>
                </div>
              </div>

              {/* Privasi dan Data */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Privasi dan Data Pribadi</h2>
                <p className="text-slate-600 mb-4">
                  Penggunaan data pribadi Anda diatur dalam Kebijakan Privasi kami. 
                  Dengan menggunakan website ini, Anda menyetujui pengumpulan dan pengolahan 
                  data sesuai dengan kebijakan tersebut.
                </p>
              </div>

              {/* Transaksi Bisnis */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Transaksi Bisnis</h2>
                <p className="text-slate-600 mb-4">
                  Untuk transaksi bisnis:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Semua perjanjian harus dibuat secara tertulis</li>
                  <li>Harga dan ketentuan dapat berubah sewaktu-waktu</li>
                  <li>Pembayaran mengikuti syarat yang disepakati</li>
                  <li>Pengiriman produk mengikuti INCOTERMS yang berlaku</li>
                  <li>Sengketa akan diselesaikan melalui negosiasi atau arbitrase</li>
                </ul>
              </div>

              {/* Hukum yang Berlaku */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hukum yang Berlaku</h2>
                <p className="text-slate-600">
                  Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan melalui pengadilan yang berwenang 
                  di Kota Kendari, Provinsi Sulawesi Tenggara.
                </p>
              </div>

              {/* Perubahan Syarat */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
                <p className="text-slate-600">
                  Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. 
                  Perubahan akan berlaku efektif setelah dipublikasikan di website. 
                  Penggunaan terus menerus website menunjukkan penerimaan Anda terhadap perubahan tersebut.
                </p>
              </div>

              {/* Kontak */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
                <p className="text-slate-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-2"><strong>PT MINERAL PERKASA GRUP</strong></p>
                  <p className="text-slate-600 mb-1">Jalan Martandu lorong rambutan, Desa/Kelurahan Andonohu</p>
                  <p className="text-slate-600 mb-1">Kec. Poasia, Kota Kendari, Provinsi Sulawesi Tenggara</p>
                  <p className="text-slate-600 mb-1">Kode Pos: 93231</p>
                  <p className="text-slate-600 mb-1">Telepon: 082312042895</p>
                  <p className="text-slate-600">Email: legal@mineralperkasagrup.com</p>
                </div>
              </div>

              {/* Effective Date */}
              <div className="border-t pt-6">
                <p className="text-sm text-slate-500 text-center">
                  Syarat dan Ketentuan ini berlaku efektif sejak 1 Januari 2024
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
                  <Gavel className="w-6 h-6 text-slate-900" />
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