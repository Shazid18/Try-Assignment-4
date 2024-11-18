import HotelCard from '@/components/HotelCard';
import { Hotel } from '@/types';

async function getHotels(): Promise<Hotel[]> {
  try {
    const res = await fetch('http://localhost:3005/api/hotels', {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch hotels');
    }

    const data: Hotel[] = await res.json();
    console.log('Fetched Hotels Data:', data); // Log all hotels data
    return data;
  } catch (error) {
    console.error('Error fetching hotels:', error); // Log any errors
    throw error;
  }
}

export default async function Home() {
  try {
    const hotels: Hotel[] = await getHotels();
    console.log('Number of hotels:', hotels.length); // Log number of hotels
    console.log('First hotel sample:', hotels[0]); // Log first hotel as sample

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Hotels</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            console.log("i am here..........................",hotel.id),
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error in Home component:', error); // Log component errors
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Error Loading Hotels</h1>
        <p className="text-red-500">Failed to load hotels. Please try again later.</p>
      </main>
    );
  }
}
