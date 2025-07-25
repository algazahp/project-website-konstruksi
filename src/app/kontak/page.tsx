'use client';

import { useState } from 'react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simpan state pesan (jika ingin menampilkan notifikasi bisa di sini)
    setShowSuccess(true);
    const { name, email, phone, project, message } = formData;
    // Format pesan WhatsApp
    const projectText = project ? `\nJenis Proyek: ${project}` : '';
    const waMessage =
      `Halo, saya ingin konsultasi proyek konstruksi.\n` +
      `Nama: ${name}\n` +
      `Email: ${email}\n` +
      `Telepon: ${phone}${projectText}\n` +
      `Pesan: ${message}`;
    // Nomor WhatsApp tujuan (tanpa +, gunakan format internasional)
    const waNumber = '6281357464003';
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    // Reset form
    setFormData({ name: '', email: '', phone: '', project: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3500);
    // Redirect ke WhatsApp (tab yang sama)
    window.location.href = waUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
      {/* Toast Success Notification */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <div className="flex items-center gap-3 bg-green-50 border border-green-300 text-green-800 px-6 py-4 rounded-xl shadow-lg font-semibold">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span>Terima kasih! Pesan Anda telah terkirim.</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-blue-700 text-white py-20 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Hubungi Kami</h1>
          <p className="text-xl text-teal-100 mb-2 max-w-2xl mx-auto">
            Diskusikan proyek konstruksi impian Anda bersama tim profesional kami.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative">
            <h2 className="text-2xl font-bold text-teal-700 mb-6 flex items-center gap-2">
              <span className="inline-block bg-teal-100 text-teal-600 rounded-full p-2 mr-2">✉️</span> Kirim Pesan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap *</label>
                <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500 transition ${formData.name ? 'text-black' : 'text-gray-500'}`}
              placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500 transition ${formData.email ? 'text-black' : 'text-gray-500'}`}
              placeholder="nama@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Nomor Telepon *</label>
                <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500 transition ${formData.phone ? 'text-black' : 'text-gray-500'}`}
              placeholder="0812-3456-7890"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-1">Jenis Proyek</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition text-gray-700 ${formData.project ? 'text-black' : 'text-gray-500'}`}
                >
                  <option value="" className="text-gray-500">Pilih jenis proyek</option>
                  <option value="rumah-tinggal">Rumah Tinggal</option>
                  <option value="gedung-komersial">Gedung Komersial</option>
                  <option value="renovasi">Renovasi</option>
                  <option value="konsultasi">Konsultasi Desain</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Pesan *</label>
                <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500 transition ${formData.message ? 'text-black' : 'text-gray-500'}`}
              placeholder="Ceritakan detail proyek Anda, lokasi, budget, dan timeline yang diinginkan..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:from-teal-700 hover:to-blue-700 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-teal-700 mb-6 flex items-center gap-2">
                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-2 mr-2">📞</span> Kontak & Lokasi
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-2">📍</span>
                  <div>
                    <div className="font-semibold text-gray-800">Alamat Kantor</div>
                    <div className="text-gray-600 text-sm">
                      Jl. Juwingan I No.2<br />Surabaya Pusat 60110<br />Indonesia
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-block bg-green-100 text-green-600 rounded-full p-2">📞</span>
                  <div>
                    <div className="font-semibold text-gray-800">Telepon</div>
                    <div className="text-gray-600 text-sm">
                      (031) 123456<br />
                      <a
                        href="https://wa.me/6281357464003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline font-medium flex items-center gap-1"
                        aria-label="Chat via WhatsApp"
                      >
                        +62 813 5746 4003 (WhatsApp)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          className="inline w-4 h-4 ml-1"
                        >
                          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.93 0-3.8-.52-5.42-1.5l-.39-.23-4.23 1.4 1.4-4.23-.23-.39A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-block bg-yellow-100 text-yellow-600 rounded-full p-2">📧</span>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600 text-sm">
                      info@ZeusKonstruksi.com<br />konsultasi@ZeusKonstruksi.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-block bg-purple-100 text-purple-600 rounded-full p-2">⏰</span>
                  <div>
                    <div className="font-semibold text-gray-800">Jam Operasional</div>
                    <div className="text-gray-600 text-sm">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 12:00<br />
                      Minggu: Libur
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lokasi Kami</h3>
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow">
                  <iframe
                    title="Lokasi Kantor Zeus Konstruksi"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9999999999995!2d112.752088!3d-7.257472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf7e0e0e0e0%3A0x123456789abcdef!2sJl.%20Juwingan%20I%20No.2%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-56"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-white via-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Berapa lama waktu pengerjaan proyek?</h3>
              <p className="text-gray-600">
                Waktu pengerjaan tergantung pada kompleksitas proyek. Rumah tinggal biasanya 3-6 bulan, sedangkan gedung komersial bisa 6-18 bulan. Kami akan memberikan timeline yang jelas setelah survei lokasi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Apakah ada garansi untuk pekerjaan?</h3>
              <p className="text-gray-600">
                Ya, kami memberikan garansi struktural 5 tahun dan garansi finishing 1 tahun. Semua garansi tercantum dalam kontrak kerja.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Bagaimana sistem pembayaran?</h3>
              <p className="text-gray-600">
                Sistem pembayaran bertahap sesuai progress pekerjaan: 20% down payment, kemudian pembayaran berkala sesuai milestone yang telah disepakati.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
