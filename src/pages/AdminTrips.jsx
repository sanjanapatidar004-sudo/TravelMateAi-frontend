import { useEffect,useState } from "react";
import { apiCall } from "../services/api";

export default function AdminTrips(){

  const [trips,setTrips] = useState([]);

  useEffect(()=>{

    const fetchTrips = async()=>{

      const res = await apiCall("/trips");

      if(res.status==="success"){
        setTrips(res.data);
      }

    }

    fetchTrips();

  },[])

  return(

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Manage Trips
      </h1>

      <table className="w-full">

        <thead>

          <tr className="border-b">
            <th>Title</th>
            <th>Destination</th>
            <th>Price</th>
          </tr>

        </thead>

        <tbody>

          {trips.map(t=>(
            <tr key={t.id} className="border-b">

              <td>{t.title}</td>

              <td>{t.destination}</td>

              <td>₹{t.price}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}