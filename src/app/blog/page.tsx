import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-20 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Blog & Artikel</h1>
          <p className="text-xl text-yellow-100 mb-2 max-w-2xl mx-auto">
            Berita, tips, dan inspirasi seputar dunia konstruksi dan proyek kami
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Artikel Terbaru</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan informasi, tips, dan update terbaru seputar konstruksi dan proyek kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Artikel Dummy */}
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-yellow-400 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="bg-yellow-100 h-48 flex items-center justify-center rounded-t-2xl">
                <span className="text-yellow-700 text-lg">Gambar Artikel</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-yellow-600 mb-2">Tips Membangun Rumah Hemat Energi</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Pelajari cara membangun rumah yang ramah lingkungan dan hemat energi untuk masa depan yang lebih baik.
                </p>
                <Link href="#" className="text-blue-600 hover:underline font-medium">Baca Selengkapnya</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-600 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="bg-blue-100 h-48 flex items-center justify-center rounded-t-2xl">
                <span className="text-blue-700 text-lg">Gambar Artikel</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Proses Renovasi Gedung Lama Menjadi Modern</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Transformasi gedung lama menjadi bangunan modern dengan teknologi dan desain terkini.
                </p>
                <Link href="#" className="text-blue-600 hover:underline font-medium">Baca Selengkapnya</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-teal-600 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="bg-teal-100 h-48 flex items-center justify-center rounded-t-2xl">
                <span className="text-teal-700 text-lg">Gambar Artikel</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Keunggulan Menggunakan Jasa Kontraktor Profesional</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Mengapa memilih kontraktor profesional sangat penting untuk keberhasilan proyek Anda.
                </p>
                <Link href="#" className="text-blue-600 hover:underline font-medium">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
