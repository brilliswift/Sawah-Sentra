import React, { useState } from 'react';
import { Menu, X, Leaf, Star, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';

const SawahSentraSimple = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Beras Premium',
      price: 'Rp 15.000/kg',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      description: 'Beras berkualitas tinggi dari sawah organik dengan tekstur pulen dan aroma wangi.',
      rating: 5
    },
    {
      id: 2,
      name: 'Beras Merah Organik',
      price: 'Rp 18.000/kg',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
      description: 'Beras merah sehat kaya nutrisi, bebas pestisida, baik untuk diet sehat.',
      rating: 5
    },
    {
      id: 3,
      name: 'Beras Putih Super',
      price: 'Rp 12.000/kg',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      description: 'Beras putih pilihan dengan kualitas terbaik untuk kebutuhan sehari-hari.',
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Leaf className="h-8 w-8 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-green-800">Sawah Sentra</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-green-800 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Beranda</a>
                <a href="#products" className="text-green-800 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Produk</a>
                <a href="#about" className="text-green-800 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Tentang</a>
                <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">Kontak</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-green-800 hover:text-green-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-green-800 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors duration-300">Beranda</a>
              <a href="#products" className="text-green-800 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors duration-300">Produk</a>
              <a href="#about" className="text-green-800 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors duration-300">Tentang</a>
              <a href="#contact" className="text-green-800 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors duration-300">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-green-400">Sawah</span>
              <span className="block">Sentra</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Menghadirkan beras berkualitas premium langsung dari sawah terbaik Magelang untuk keluarga Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Lihat Produk</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Hubungi Kami</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8 text-white text-center">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Pelanggan Puas</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm">Organik</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
            <div className="text-2xl font-bold">50Ha</div>
            <div className="text-sm">Luas Sawah</div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full text-green-700 font-semibold text-sm mb-4">
              PRODUK UNGGULAN
            </div>
            <h2 className="text-5xl font-bold text-green-800 mb-6">
              Pilihan Beras Terbaik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Setiap butir beras dipilih dengan teliti untuk memastikan kualitas premium yang sampai ke meja keluarga Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                  index === 1 ? 'md:scale-110 md:z-10' : ''
                }`}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Premium
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">({product.rating}.0)</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-green-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-green-600">{product.price}</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Pesan</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl">
              Lihat Semua Produk
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544965503-7ad532882269?w=600&h=400&fit=crop" 
                alt="Sawah Magelang"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Tahun Pengalaman</div>
              </div>
            </div>
            
            <div>
              <div className="inline-block bg-green-100 px-4 py-2 rounded-full text-green-700 font-semibold text-sm mb-4">
                TENTANG KAMI
              </div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Dari Sawah Magelang untuk Indonesia
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sawah Sentra adalah keluarga besar petani Magelang yang telah berpengalaman lebih dari 25 tahun dalam menghasilkan beras berkualitas premium. Kami berkomitmen untuk memberikan yang terbaik dari tanah subur Jawa Tengah.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan menggabungkan teknik pertanian tradisional dan teknologi modern, kami memastikan setiap butir beras yang sampai ke tangan Anda adalah hasil terbaik dari kerja keras dan dedikasi para petani lokal.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-green-800">Organik</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-green-800">Pelanggan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Leaf className="h-10 w-10 text-green-400 mr-3" />
                <span className="text-3xl font-bold">Sawah Sentra</span>
              </div>
              <p className="text-green-200 mb-6 leading-relaxed text-lg">
                Menghadirkan beras berkualitas premium langsung dari sawah terbaik Magelang. 
                Komitmen kami adalah memberikan nutrisi terbaik untuk keluarga Indonesia.
              </p>
              <div className="flex space-x-4">
                <div className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300 cursor-pointer">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300 cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300 cursor-pointer">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Produk</h4>
              <ul className="space-y-3 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Beras Premium</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Beras Merah Organik</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Beras Putih Super</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Gabah Berkualitas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Kontak</h4>
              <div className="space-y-3 text-green-200">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>info@sawahsentra.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Magelang, Jawa Tengah</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-center md:text-left">
              &copy; 2025 Sawah Sentra. Semua hak dilindungi.
            </p>
            <p className="text-green-200 text-center md:text-right mt-4 md:mt-0">
              Diproduksi dengan cinta dari Magelang 🌾
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SawahSentraSimple;
