// Arquivo: src/components/Hero.jsx

// Agora estamos importando a imagem que você adicionou na pasta assets
import heroImage from '../assets/hero-image.png';

export default function Hero() {
  return (
    <section className="container mx-auto flex items-center py-12 px-4">
      {/* Coluna da Imagem (Esquerda) */}
      <div className="w-1/2 flex justify-center">
        {/* E aqui estamos usando a imagem importada */}
        <img 
          src={heroImage} 
          alt="Modelo de barbearia" 
          className="max-w-sm" 
        />
      </div>

      {/* Coluna do Call to Action (Direita) */}
      <div className="w-1/2 text-left">
        <h2 className="font-serif text-6xl text-text leading-tight">
          Your Choice,<br />Our Perfection
        </h2>
        <p className="text-xl text-gray-500 my-6 max-w-md">
          We believe in quality. We are providing perfect services to our clients.
        </p>
        <a
          href="#agendamento"
          className="bg-accent text-white font-bold text-lg py-4 px-12 rounded-md hover:opacity-90 transition-opacity duration-300"
        >
          AGENDAR HORÁRIO
        </a>
      </div>
    </section>
  );
}