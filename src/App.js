import './App.css';
import Benefits from './Components/Benefits';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Servicios from './Components/Servicios';
import Stats from './Components/Stats';
import Testimonials from './Components/Testimonials';


const productsone = [
  {
      id: 1,
      name: 'Branding',
      href: 'rkWgyp5M',
      price: 'Desde 2800 mxn',
      imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
      id: 2,
      name: 'Website',
      href: 'rhjldVNN',
      price: 'Desde 3900 mxn',
      imageSrc: 'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
      id: 3,
      name: 'Flyers',
      href: 'VSl1gERF',
      price: 'Desde 180 mxn',
      imageSrc: 'https://images.unsplash.com/photo-1598113571597-3a3d9c70b8c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
      id: 4,
      name: 'Traducciones',
      href: 'zAygmta5',
      price: 'Desde 90 mxn',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

const productstwo = [
  {
      id: 1,
      name: 'Branding',
      href: '#',
      price: '$48',
      imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
      id: 2,
      name: 'Website',
      href: '#',
      price: '$35',
      imageSrc: 'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
      id: 3,
      name: 'Flyers',
      href: '#',
      price: '$89',
      imageSrc: 'https://images.unsplash.com/photo-1598113571597-3a3d9c70b8c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
      id: 4,
      name: 'Traducciones',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

function App() {
  return (
    <div>
     <Hero/>
     <Stats></Stats>
     <Benefits></Benefits>
     <Servicios products={productsone}></Servicios>
     <Testimonials></Testimonials>
     <Servicios products={productsone}></Servicios>
     <Footer></Footer>

    </div>
  );
}

export default App;
