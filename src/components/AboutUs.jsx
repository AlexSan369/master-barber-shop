// Arquivo: src/components/AboutUs.jsx

// Componente para a grade de imagens da direita
function ImageGrid() {
  // Usaremos placeholders para as imagens
  const images = [
    "https://i.imgur.com/gKj5y0T.png", // Imagem retangular alta
    "https://i.imgur.com/L3ahA2x.png", // Imagem quadrada pequena
    "https://i.imgur.com/VnXaH3f.png", // Imagem quadrada pequena
  ];

  return (
    // Grade principal com 3 colunas
    <div className="grid grid-cols-3 gap-3 pb-3 h-full">

      <div className="col-span-1">
        <img src={images[0]} alt="Interior da barbearia 1" className="w-full h-full object-cover shadow-lg" />
      </div>
      
      <div className="col-span-1">
        <img src={images[1]} alt="Detalhe do corte" className="w-full h-full object-cover shadow-lg" />
      </div>
      
      <div className="col-span-1">
        <img src={images[2]} alt="Cliente na cadeira" className="w-full h-full object-cover shadow-lg" />
      </div>
    </div>
  );
}

// Componente principal da seção
export default function AboutUs() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Container A: Coluna da Esquerda (Texto) */}
        <div className="w-full md:w-1/2">
          <h2 className="font-serif text-5xl font-bold text-text mb-6">
            Sobre Nós
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="bg-accent text-white font-bold text-lg py-4 px-10 hover:opacity-90 transition-opacity">
            Entenda Nossa História &rarr;
          </button>
        </div>

        {/* Container B: Coluna da Direita (Grade de Imagens) */}
        <div className="w-full md:w-1/2 h-[500px]">
          <ImageGrid />
        </div>
      </div>
    </section>
  );
}