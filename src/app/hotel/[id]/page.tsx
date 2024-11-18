import { Hotel } from '@/types';
import Link from 'next/link';

async function getHotel(id: string) {
  try {
    // Make sure to handle CORS and credentials if needed
    const res = await fetch(`http://localhost:3005/api/hotel/${id}`, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch hotel. Status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Fetched Hotel Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching hotel:', error);
    throw error;
  }
}

export default async function HotelPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    console.log('Hotel ID from params:', params.id);
    const hotel: Hotel = await getHotel(params.id);

    if (!hotel) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Back to Home
          </Link>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
          ← Back to Hotels
        </Link>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-4">
          {hotel.images && (
            <div className="w-full h-96 relative">
              <img
                src={hotel.images}
                alt={hotel.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{hotel.title}</h1>
            <div className="space-y-4">
              {hotel.description && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <p className="text-gray-600">{hotel.description}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Location</h2>
                  <p className="text-gray-600">{hotel.latitude}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Details</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Price:</span> ${hotel.guestCount}/night
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Rating:</span>{' '}
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {hotel.bathroomCount}/5
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in HotelPage component:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Error Loading Hotel</h1>
        <p className="text-red-500 mb-4">Failed to load hotel details. Please try again later.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }
}