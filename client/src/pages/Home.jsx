import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import backgroundImage from '../images/page.png'; 

export const Home= () => {
  const { t } = useTranslation();

  return (
    <div 
    className="min-h-screen flex items-start justify-center pt-10 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Link to="/products" className="text-4xl font-bold text-red-500">
     {t( "Explore Space Goods")}
    </Link>
    </div>
  );
};

