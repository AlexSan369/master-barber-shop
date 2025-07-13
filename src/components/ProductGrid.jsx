// Arquivo: src/components/ProductGrid.jsx

// Dados mockados ATUALIZADOS para os 4 cards da grade
const gridProducts = [
  {
    id: 'grid-1',
    name: "Complete Beard Package",
    description: "Best package for all beards",
    imageUrl: "https://i.imgur.com/2VXwPND.png",
  },
  {
    id: 'grid-2',
    name: "Pro Trimmer",
    description: "Superior Clean",
    imageUrl: "https://i.imgur.com/Qphw62j.png",
  },
  {
    id: 'grid-3',
    name: "Face Care",
    description: "Beauty & Care",
    imageUrl: "https://i.imgur.com/sJ7eD9c.png",
  },
  {
    id: 'grid-4',
    name: "Salon TD",
    description: "Beauty Pack",
    imageUrl: "https://i.imgur.com/vWb2jVw.png",
  },
];

// Componente reutilizável para um único card de produto na grade
// Adicionamos 'className' como uma prop para flexibilidade de layout
function ProductCard({ product, className }) {
  return (
    <div className={`group relative h-full w-full overflow-hidden shadow-lg ${className}`}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="font-serif text-3xl font-bold text-white">{product.name}</h3>
        <p className="mt-1 text-gray-300">{product.description}</p>
        <button className="mt-4 self-start font-semibold text-accent transition-colors hover:text-white">
          Shop Now &rarr;
        </button>
      </div>
    </div>
  );
}

// Componente principal da seção da grade
export default function ProductGrid() {
  return (
    <section className="container mx-auto py-16 px-4">
      {/* Grade Principal - 2 colunas em telas médias e grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ minHeight: '600px' }}>

        {/* Coluna da Esquerda: Ocupa a primeira coluna inteira */}
        <ProductCard product={gridProducts[0]} />

        {/* Coluna da Direita: É uma grade aninhada */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
          
          {/* Item Retangular (ocupa as 2 colunas da grade interna) */}
          <ProductCard product={gridProducts[1]} className="md:col-span-2" />
          
          {/* Item Quadrado (ocupa a primeira coluna da segunda linha) */}
          <ProductCard product={gridProducts[2]} />

          {/* Item Quadrado (ocupa a segunda coluna da segunda linha) */}
          <ProductCard product={gridProducts[3]} />

        </div>
      </div>
    </section>
  );
}