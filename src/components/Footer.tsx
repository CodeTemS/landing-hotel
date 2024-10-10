import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hotel, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center">
              <Hotel className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Luxury Hotel</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              &copy; {currentYear} Luxury Hotel. {t('footer.rights')}
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">{t('header.contact')}</h3>
            <p className="text-sm text-gray-400">
              123 Hotel Street, City, Country
              <br />
              +1 (123) 456-7890
              <br />
              info@luxuryhotel.com
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition duration-300">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-white transition duration-300">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;