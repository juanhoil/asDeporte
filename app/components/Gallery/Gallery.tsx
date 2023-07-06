// MENTORS DATA

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
}

interface Product2 {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
  ubication:string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'L´Etape La Paz by Tour de France 2023',
    href: '#',
    imageSrc: '/assets/mentor/boy1.svg',
    imageAlt: "La Paz, Baja California",
    color: '26 Feb 2023',
  },
  {
    id: 2,
    name: 'L´Etape La Paz by Tour de France 2023',
    href: '#',
    imageSrc: '/assets/mentor/boy2.svg',
    imageAlt: "La Paz, Baja California",
    color: '26 Feb 2023',
  },
  {
    id: 3,
    name: 'L´Etape La Paz by Tour de France 2023',
    href: '#',
    imageSrc: '/assets/mentor/boy3.svg',
    imageAlt: "La Paz, Baja California",
    color: '26 Feb 2023',
  },
  {
    id: 4,
    name: 'L´Etape La Paz by Tour de France 2023',
    href: '#',
    imageSrc: '/assets/mentor/boy4.svg',
    imageAlt: "La Paz, Baja California",
    color: '26 Feb 2023',
  },
  {
    id: 5,
    name: 'L´Etape La Paz by Tour de France 2023',
    href: '#',
    imageSrc: '/assets/mentor/boy5.svg',
    imageAlt: "La Paz, Baja California",
    color: '26 Feb 2023',
  },
  {
    id: 6,
    name: 'L´Etape La Paz by Tour de France 2023',
    href: '#',
    imageSrc: '/assets/mentor/girl1.svg',
    imageAlt: "La Paz, Baja California",
    color: '26 Feb 2023',
  },
]

const products2: Product2[] = [
  {
    id: 1,
    name: 'L´Etape La Paz by Tour de France',
    ubication: 'CDMX',
    href: '#',
    imageSrc: '/assets/mentor/unic.svg',
    imageAlt: "La Paz, Baja California",
    color: '4 septiembre 2022',
  },
  {
    id: 2,
    name: 'L´Etape La Paz by Tour de France',
    ubication: 'CDMX',
    href: '#',
    imageSrc: '/assets/mentor/unic.svg',
    imageAlt: "La Paz, Baja California",
    color: '4 septiembre 2022',
  },
  {
    id: 3,
    name: 'L´Etape La Paz by Tour de France',
    ubication: 'CDMX',
    href: '#',
    imageSrc: '/assets/mentor/unic.svg',
    imageAlt: "La Paz, Baja California",
    color: '4 septiembre 2022',
  },
  {
    id: 4,
    name: 'L´Etape La Paz by Tour de France',
    ubication: 'CDMX',
    href: '#',
    imageSrc: '/assets/mentor/unic.svg',
    imageAlt: "La Paz, Baja California",
    color: '4 septiembre 2022',
  },
  {
    id: 5,
    name: 'L´Etape La Paz by Tour de France',
    ubication: 'CDMX',
    href: '#',
    imageSrc: '/assets/mentor/unic.svg',
    imageAlt: "La Paz, Baja California",
    color: '4 septiembre 2022',
  },
  {
    id: 6,
    name: 'L´Etape La Paz by Tour de France',
    ubication: 'CDMX',
    href: '#',
    imageSrc: '/assets/mentor/unic.svg',
    imageAlt: "La Paz, Baja California",
    color: '4 septiembre 2022',
  },
]

const Mentor = () => {
  return (
    <div id="mentors-section" className="mx-auto max-w-2xl pb-2 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

      <div className='sm:flex justify-between items-center mb-12'>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="relative hidden md:block">
          <img className="w-full" src={product.imageSrc} alt="Gallery Item" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center z-1">
              <img className="mt-4 w-16 mx-auto" src={'/assets/logo/Logo2.svg'} alt="Logo" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="text-white text-center w-full bg-gradient">
              <p className="text-lg">{product.name}</p>
              <p className="text-lg">
                {product.imageAlt} 
                  &nbsp;
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'revert'}}>
                    <circle cx="2" cy="2" r="1.5" fill="#D9D9D9"/>
                  </svg>
                  &nbsp;
                {product.color}
              </p>
            </div>
          </div>
        </div>
      ))}
      {products2.map((product) => (
        <div key={product.id} className="relative block md:hidden">
          <img className="w-full" src={product.imageSrc} alt="Gallery Item" />
          <div className="flex items-end justify-center">
            <div className="w-full">
              <p className="text-xs"><strong>{product.name}</strong></p>
              <p className="text-xs text-gray">
                {product.ubication} 
              </p>
              <p className="text-xs text-gray" style={{fontWeight: '600'}}>
                {product.color} 
              </p>
              <div className="text-xs text-gray flex justify-between">
                <div>Desde: $680</div>
                <div>Plus: $580</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      </div>
    </div>
  )
}

export default Mentor;
