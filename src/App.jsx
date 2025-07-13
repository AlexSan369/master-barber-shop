// Arquivo: src/App.jsx

import Hero from './components/Hero';
import Services from './components/Services';
import Shop from './components/Shop';
import ProductGrid from './components/ProductGrid';
import TeamCarousel from './components/TeamCarousel';
import AboutUs from './components/AboutUs';
import CourseCTA from './components/CourseCTA';
import Footer from './components/Footer';

// Componente para a barra do topo com o logo
function TopBar() {
  return (
    <div className="text-center py-4">
      <span className="font-serif text-2xl text-text">Master Barbearia</span>
    </div>
  );
}

// Componente para a barra de navegação principal
function MainNav() {
  return (
    <nav className="text-white container mx-auto">
      <div className="bg-primary shadow-xl flex justify-center items-center p-7 rounded-xl">
        <div className="flex space-x-[6rem] text-lg">
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Serviços</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Produtos</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Sobre</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cursos</a>
        </div>
      </div>
    </nav>
  );
}

// Componente principal que organiza a página toda
export default function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      
      <TopBar />
      
      {/* Hero dentro do seu próprio container para centralização */}
      <div className="container mx-auto">
        <Hero />
      </div>

      <MainNav />

      {/* Services vem logo em seguida e FORA de um container para o efeito de largura total */}
      <Services />

      {/* Shop e ProductGrid juntos dentro de um container */}
      <div className="container mx-auto">
        <Shop />
        <ProductGrid />

      </div>
        <TeamCarousel />
        <AboutUs />
        <CourseCTA />
        <Footer />
    </div>
  )
}