// Arquivo: src/components/CourseCTA.jsx

import React from 'react';

function ImageGrid() {
  const images = [
    "https://i.imgur.com/gKj5y0T.png",
    "https://i.imgur.com/L3ahA2x.png",
    "https://i.imgur.com/VnXaH3f.png",
  ];

  return (
    // AJUSTE 2: Troquei h-9/10 (inválido) por h-full para que a grade ocupe toda a altura do seu container pai.
    <div className="grid grid-cols-3 gap-3 h-full">
      <div className="col-span-1">
        <img src={images[0]} alt="Interior da barbearia 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
      <div className="col-span-1">
        <img src={images[1]} alt="Detalhe do corte" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
      <div className="col-span-1">
        <img src={images[2]} alt="Cliente na cadeira" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default function CourseCTA() {
  return (
    <section className="bg-primary text-white">
      {/* AJUSTE 1: Removi 'items-center' para permitir que as colunas estiquem para a mesma altura. */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Coluna da Esquerda: Texto */}
        <div className="md:w-1/2 flex flex-col justify-between text-center md:text-left">
          <div>
            <h2 className="font-serif text-5xl font-bold leading-tight">
              Torne-se um Barbeiro de Elite
            </h2>
            <p className="text-xl text-gray-300 my-6 max-w-2xl">
              Nosso curso presencial intensivo acontece apenas 2x ao ano e transforma entusiastas em mestres da navalha. Aprenda as técnicas que definem os melhores profissionais do mercado.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:flex-row justify-between mt-8">
            <span className="text-sm text-gray-400">
              Turmas exclusivas. Vagas limitadas.
            </span>
            <a
              href="#"
              className="bg-background text-primary font-bold text-lg py-4 px-12 rounded-md hover:opacity-90 transition-opacity w-full mt-4 md:mt-0 md:w-auto text-center"
            >
              QUERO SABER MAIS
            </a>
          </div>
        </div>

        {/* Coluna da Direita: Imagens */}
        <div className="w-full md:w-1/2">
          <ImageGrid />
        </div>
        
      </div>
    </section>
  );
}