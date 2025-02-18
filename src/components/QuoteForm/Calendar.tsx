import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar = () => {
  const today = new Date();
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i + 1);
    return date;
  });

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Date souhaitée d'intervention
      </label>
      <div className="relative">
        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <select
          className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue=""
        >
          <option value="" disabled>Sélectionnez une date</option>
          {availableDates.map((date) => (
            <option key={date.toISOString()} value={date.toISOString()}>
              {date.toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
              })}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Calendar;