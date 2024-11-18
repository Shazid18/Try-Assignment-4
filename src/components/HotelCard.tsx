import Link from 'next/link';
import { Hotel } from '@/types';

interface Props {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: Props) => {
  console.log("nadim",hotel.images);
  
  return (
    <Link 
      href={`/hotel/${hotel.id}`}
      className="block transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        {hotel.images && (
          <div className="w-full h-48 relative">
            <img
              src={`http://localhost:3005/${hotel.images[0]}`}
              alt={hotel.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{hotel.title}</h2>
          <p className="text-gray-600 mt-2">{hotel.host.name}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-green-600 font-medium">
              ${hotel.amenities}/night
            </span>
            <span className="text-sm text-gray-500">
              Rating: {hotel.bathroomCount}/5
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;