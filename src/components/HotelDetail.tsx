// import { Hotel } from '@/types';

// async function getHotel(id: string) {
//   try {
//     const res = await fetch(`http://localhost:3005/api/hotel/${id}`, {
//       cache: 'no-store'
//     });
    
//     if (!res.ok) {
//       throw new Error('Failed to fetch hotel');
//     }
    
//     const data = await res.json();
//     console.log('Fetched Hotel Data:', data); // Log specific hotel data
//     return data;
//   } catch (error) {
//     console.error('Error fetching hotel:', error); // Log any errors
//     throw error;
//   }
// }

// export default async function HotelPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   try {
//     console.log('Fetching hotel with ID:', params.id); // Log hotel ID being fetched
//     const hotel: Hotel = await getHotel(params.id);

//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//           <img
//             src={hotel.images}
//             alt={hotel.title}
//             className="w-full h-96 object-cover"
//           />
//           <div className="p-6">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{hotel.title}</h1>
//             <p className="text-gray-600 mb-4">{hotel.description}</p>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-gray-600">
//                   <span className="font-semibold">Location:</span> {hotel.latitude}
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-semibold">Price:</span> ${hotel.description}/night
//                 </p>
//               </div>
//               <div>
//                 <p className="text-gray-600">
//                   <span className="font-semibold">Rating:</span> {hotel.guestCount}/5
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error in HotelPage component:', error); // Log component errors
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Error Loading Hotel</h1>
//         <p className="text-red-500">Failed to load hotel details. Please try again later.</p>
//       </div>
//     );
//   }
// }