// Arquivo: src/components/Shop.jsx

const carouselProducts = [
  {
    id: 1,
    category: "Promoção",
    name: "Bold Trimmer",
    description: "Máquina de corte profissional sem fio.",
    details: "Bateria de longa duração e lâminas de titânio.",
    price: "200,00",
    rating: 5,
    imageUrl: "https://i.imgur.com/8QkHw2h.png",
  },
  // ... outros produtos
];

function ShopHeader() {
  return (
    <div className="text-center mb-12">
      <span className="font-serif text-3xl text-text">BARBER</span>
      {/* AJUSTE 1: Removi a largura fixa e o mx-auto para a linha ocupar o espaço do container */}
      <hr className="mt-2 border-t-2 border-accent" />
    </div>
  );
}

function CarouselSlide({ product }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* AJUSTE 2: Troquei 'text-left' por 'text-right' para alinhar a coluna da promoção */}
      <div className="w-full md:w-1/4 text-right">
        <h3 className="font-serif text-2xl text-accent font-bold mb-4">{product.category}</h3>
        <p className="text-gray-500 mb-2">Cutting Equipment</p>
        <p className="text-gray-500 mb-2">Hair & Beard Care</p>
        <p className="text-gray-500">Skin Care</p>
      </div>

      <div className="w-full md:w-1/2">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      </div>

      <div className="w-full md:w-1/4 text-left">
        <h3 className="font-serif text-4xl text-text font-bold">{product.name}</h3>
        <div className="flex items-center my-3">
          {Array(product.rating).fill(0).map((_, i) => (
             <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          ))}
        </div>
        <p className="text-gray-500 mb-1">{product.description}</p>
        <p className="text-gray-500 mb-4">{product.details}</p>
        <p className="text-3xl font-light text-text mb-6">R$ {product.price}</p>
        <button className="border-2 border-accent text-accent font-bold py-3 px-12 hover:bg-accent hover:text-white transition-colors duration-300">
          COMPRAR
        </button>
      </div>
    </div>
  );
}

export default function Shop() {
  const currentProduct = carouselProducts[0];

  return (
    <section className="container mx-auto py-24 px-4">
      <ShopHeader />
      
      <div className="relative">
        <CarouselSlide product={currentProduct} />
        
        <div className="flex justify-center space-x-3 mt-8">
          <button className="w-3 h-3 bg-accent"></button>
          <button className="w-3 h-3 bg-gray-300 hover:bg-gray-400"></button>
          <button className="w-3 h-3 bg-gray-300 hover:bg-gray-400"></button>
        </div>
      </div>
    </section>
  );
}