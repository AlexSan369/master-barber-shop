// Arquivo: src/components/Footer.jsx

function SocialIcon({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        {/* Mantendo 'items-start' para garantir o alinhamento superior */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
          
          {/* Coluna 1: Sobre a Barbearia */}
          <div className="md:col-span-1 pl-9">
            {/* AJUSTE: Tamanho do título padronizado para text-lg, como os outros */}
            <h3 className="font-serif text-lg font-bold text-text mb-4">Master Barbearia</h3>
            <p className="text-gray-500">
              Elevando a arte da barbearia com técnica, estilo e uma experiência incomparável.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="text-center ">
            <h3 className="font-serif text-lg font-bold text-text mb-4">Navegação</h3>
            {/* AJUSTE: Cor do texto revertida para o tema claro */}
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-accent">Serviços</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent">Produtos</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent">Cursos</a></li>
            </ul>
          </div >

          {/* Coluna 3: Contato */}
          <div className="text-center">
            <h3 className="font-serif text-lg font-bold text-text mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Rua da Navalha, 123</li>
              <li>Centro, São Paulo - SP</li>
              <li>(11) 98765-4321</li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="text-center">
            <h3 className="font-serif text-lg font-bold text-text mb-4">Siga-nos</h3>
            <div className="flex  justify-center md:justify-center space-x-5">
              {/* Ícones já estão corretos */}
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9L12.03,9.03C12.33,9.03 12.55,9.26 12.55,9.55C12.55,9.85 12.33,10.08 12.03,10.08C11.74,10.08 11.5,9.85 11.5,9.55C11.5,9.26 11.74,9.03 12.03,9.03M12,11.25A3.75,3.75 0 0,1 15.75,15H8.25A3.75,3.75 0 0,1 12,11.25Z" /></svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Master Barbearia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}