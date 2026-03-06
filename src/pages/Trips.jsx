import { useEffect, useState } from "react";
import { apiCall } from "../services/api";
import { Link } from "react-router-dom";

export default function Trips() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {

    const fetchTrips = async () => {

      const res = await apiCall("/trips?page=0&size=10");

      if (res.status === "success") {
        setTrips(res.data.content);
      }

    };

    fetchTrips();

  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Available Trips
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {trips.map((trip) => (

          <div
            key={trip.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >

            <img
              src={trip.imageUrl}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">

              <h2 className="text-xl font-bold">
                {trip.title}
              </h2>

              <p className="text-gray-500">
                {trip.destination}
              </p>

              <p className="font-semibold mt-2">
                ₹ {trip.price}
              </p>

            </div>

          </div>

        ))}

      </div>

      <Link
  to={`/trip/${trips.id}`}
  className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
>
  View Details
</Link>

    </div>
  );
}