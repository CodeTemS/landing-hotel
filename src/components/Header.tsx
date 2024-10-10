import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hotel, Menu } from 'lucide-react';

interface HeaderProps {
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Hotel className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Luxury Hotel</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">{t('header.home')}</a>
          <a href="#rooms" className="text-gray-600 hover:text-blue-600">{t('header.rooms')}</a>
          <a href="#reservation" className="text-gray-600 hover:text-blue-600">{t('header.reservation')}</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">{t('header.contact')}</a>
        </nav>
        <div className="flex items-center space-x-2">
          <button onClick={() => changeLanguage('en')} className="text-sm text-gray-600 hover:text-blue-600">EN</button>
          <button onClick={() => changeLanguage('es')} className="text-sm text-gray-600 hover:text-blue-600">ES</button>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;