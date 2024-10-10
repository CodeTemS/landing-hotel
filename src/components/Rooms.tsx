import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Wifi, Tv, Wind, GlassWater, UtensilsCrossed, Mountain } from 'lucide-react';

const Rooms: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const roomTypes = ['standard', 'deluxe', 'suite'];

  const getIcon = (service: string) => {
    switch (service) {
      case 'Free Wi-Fi':
      case 'Wi-Fi Gratis':
        return <Wifi className="h-5 w-5 mr-2" />;
      case 'TV':
        return <Tv className="h-5 w-5 mr-2" />;
      case 'Air Conditioning':
      case 'Aire Acondicionado':
        return <Wind className="h-5 w-5 mr-2" />;
      case 'Mini Bar':
        return <GlassWater className="h-5 w-5 mr-2" />;
      case 'Room Service':
      case 'Servicio a la Habitación':
        return <UtensilsCrossed className="h-5 w-5 mr-2" />;
      case 'City View':
      case 'Vista a la Ciudad':
      case 'Panoramic View':
      case 'Vista Panorámica':
        return <Mountain className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <section id="rooms" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('rooms.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomTypes.map((roomType) => (
            <div key={roomType} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Slider {...settings}>
                {[1, 2, 3].map((index) => (
                  <div key={index}>
                    <img
                      src={`https://source.unsplash.com/random/800x600?hotel,room,${roomType}&sig=${index}`}
                      alt={t(`rooms.${roomType}.title`)}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t(`rooms.${roomType}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`rooms.${roomType}.description`)}</p>
                <ul className="space-y-2">
                  {(t(`rooms.${roomType}.services`, { returnObjects: true }) as string[]).map((service: string, index: number) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      {getIcon(service)}
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;