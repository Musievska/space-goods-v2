import { Link } from 'react-router-dom';
import backgroundImage from '../images/page.png'; 

export const Home= () => {
  return (
    <div 
    className="min-h-screen flex items-start justify-center pt-10 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Link to="/products" className="text-4xl font-bold text-red-500">
      Explore Space Goods
    </Link>
    </div>
  );
};

