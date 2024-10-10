import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Reservation: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(t('reservation.successMessage'));
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '',
        roomType: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="reservation" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('reservation.title')}</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="checkIn" className="block text-gray-700 font-semibold mb-2">
              {t('reservation.checkIn')}
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="checkOut" className="block text-gray-700 font-semibold mb-2">
              {t('reservation.checkOut')}
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
              {t('reservation.guests')}
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="roomType" className="block text-gray-700 font-semibold mb-2">
              {t('reservation.roomType')}
            </label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">{t('reservation.roomType')}</option>
              <option value="standard">{t('rooms.standard.title')}</option>
              <option value="deluxe">{t('rooms.deluxe.title')}</option>
              <option value="suite">{t('rooms.suite.title')}</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('reservation.submitting') : t('reservation.submit')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;