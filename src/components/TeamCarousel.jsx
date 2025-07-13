// Arquivo: src/components/TeamCarousel.jsx

import React, { useState } from 'react';

// Dados mockados para os nossos 3 barbeiros
const teamData = [
  {
    id: 1,
    name: "Steward Darrell",
    role: "Barbeiro Especialista",
    bio: "Com mais de 15 anos de experiência, Steward é um mestre da tesoura e navalha, especializado em cortes clássicos e barbas de precisão.",
    imageUrl: "https://i.imgur.com/8QkHw2h.png",
  },
  {
    id: 2,
    name: "Alexandre Caju",
    role: "Expert em Finalização",
    bio: "Alexandre transforma cortes bons em cortes perfeitos com sua técnica de finalização e conhecimento profundo de produtos.",
    imageUrl: "https://i.imgur.com/sJ7eD9c.png",
  },
  {
    id: 3,
    name: "Bruno Santos",
    role: "Mestre da Barba Terapia",
    bio: "Especialista em rituais de barba terapia, Bruno oferece uma experiência relaxante e rejuvenescedora que vai além do corte.",
    imageUrl: "https://i.imgur.com/vWb2jVw.png",
  },
];

function TeamMemberSlide({ member, onNext, onPrev }) {
  // AJUSTE 1: Removi a classe 'items-center' para permitir que as colunas estiquem
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Coluna da Esquerda: Imagem */}
      <div className="w-full md:w-1/3 bg-primary shadow-xl px-auto flex items-end">
        <img src={member.imageUrl} alt={member.name} className="rounded-lg w-full h-3/4 object-cover" />
      </div>

      {/* Coluna da Direita: Informações */}
      <div className="w-full md:w-2/3 flex flex-col items-start">
        <h2 className="font-serif text-4xl font-bold text-center text-text mb-12">
          Nossos Artistas da Navalha
        </h2>
        
        <h3 className="font-serif text-6xl text-text font-bold">{member.name}</h3>
        
        <div className="container flex justify-end space-x-4 my-6 w-full">
          <button onClick={onPrev} className="w-12 h-12 flex items-center justify-center rounded-md border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors">
            &larr;
          </button>
          <button onClick={onNext} className="w-12 h-12 flex items-center justify-center rounded-md border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors">
            &rarr;
          </button>
        </div>

        <div className="w-full bg-primary text-white p-8 rounded-xl shadow-xl">
          <h4 className="font-serif text-2xl font-bold mb-6">{member.role}</h4>
          <p className="mt-2 text-lg leading-9 text-gray-300">{member.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? teamData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === teamData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    // Movi o título da seção para cá, que é um lugar mais apropriado
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <TeamMemberSlide 
            member={teamData[currentIndex]}
            onPrev={goToPrevious}
            onNext={goToNext}
          />
        </div>
      </div>
    </section>
  );
}