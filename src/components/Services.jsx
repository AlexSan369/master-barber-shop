// src/components/Services.jsx

import React, { useState } from 'react';

const servicesData = [
  { name: "Corte Preciso", details: "Ver Detalhes", price: "120", imageUrl: "https://i.imgur.com/L3ahA2x.png" },
  { name: "Barba Alinhada", details: "Ver Detalhes", price: "350", imageUrl: "https://i.imgur.com/VnXaH3f.png" },
  { name: "Barba Terapia", details: "Ver Detalhes", price: "220", imageUrl: "https://i.imgur.com/5J3m8eC.png" },
  { name: "Cuidados Capilares", details: "Ver Detalhes", price: "400", imageUrl: "https://i.imgur.com/2VXwPND.png" },
];

function ServiceCard({ service }) {
  return (
    <div className="flex-shrink-0 w-72 mr-8 bg-white shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={service.imageUrl} alt={service.name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="font-serif text-2xl font-bold text-text text-center">{service.name}</h3>
        <p className="text-sm text-gray-400 text-center">{service.details}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-text">R$ {service.price},00</span>
          <button className="bg-accent text-white font-bold py-2 px-5 hover:opacity-90 transition-opacity">
            AGENDAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = servicesData.length - 3; 

  const goToPrevious = () => setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  const goToNext = () => setCurrentIndex(currentIndex >= maxIndex ? maxIndex : currentIndex + 1);

  const cardMovement = currentIndex * 320;

  return (
    <section className="pt-[6rem] overflow-x-clip"> 
      <div className="md:container md:ml-auto flex items-center justify-around pr-0">
        {/* Coluna da Esquerda: Título e Navegação */}
        <div className="w-1/3 px-10 pt-10">
          <h2 className="font-serif text-5xl font-bold text-text leading-tight">
            Nossos Serviços
          </h2>
          <p className="text-gray-500 my-6">
            Confira nossos serviços profissionais de cuidados e outros tratamentos que irão completar o seu visual.
          </p>
          <div className="flex justify-end space-x-4">
            <button onClick={goToPrevious} className="w-12 h-6 flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentIndex === 0}>
              &larr;
            </button>
            <button onClick={goToNext} className="w-12 h-6 flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentIndex >= maxIndex}>
              &rarr;
            </button>
          </div>
        </div>

        {/* Coluna da Direita: Carrossel */}
        {/* AJUSTE: Adicionando 'overflow-hidden' ao container principal do carrossel */}
        <div className=" relative overflow-hidden"> 
          <div className="absolute top-0 left-7 right-0 h-[65%] bg-primary z-0"></div>
          
          <div className="relative pt-10">
            <div
              className="flex transition-transform duration-500 ease-in-out pb-10"
              style={{ transform: `translateX(-${cardMovement}px)` }}
            >
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}