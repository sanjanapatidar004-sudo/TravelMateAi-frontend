import { useEffect, useState } from "react";
import { apiCall } from "../services/api";

export default function Recommendations() {

  const [trips,setTrips] = useState([]);

  useEffect(()=>{

    const fetchRecommendations = async()=>{

      const res = await apiCall("/recommendations");

      if(res.status==="success"){
        setTrips(res.data);
      }

    }

    fetchRecommendations();

  },[])

  return(

    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Recommended Trips
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {trips.map(trip=>(
          <div key={trip.id} className="border p-4 rounded-lg">

            <img
            src={trip.imageUrl}
            className="h-48 w-full object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-3">
              {trip.title}
            </h2>

            <p>{trip.destination}</p>

            <p className="font-semibold">
              ₹{trip.price}
            </p>

          </div>
        ))}

      </div>

    </div>

  )

}