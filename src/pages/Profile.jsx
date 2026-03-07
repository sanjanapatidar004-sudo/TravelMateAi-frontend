import { useEffect,useState } from "react";
import { apiCall } from "../services/api";

export default function Profile(){

  const [bookings,setBookings] = useState([]);

  useEffect(()=>{

    const fetchBookings = async()=>{

      const res = await apiCall("/bookings/my");

      if(res.status==="success"){
        setBookings(res.data);
      }

    }

    fetchBookings();

  },[])

  return(

    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        My Bookings
      </h1>

      {bookings.map(b=>(
        <div key={b.id} className="border p-4 mb-4 rounded">

          <h2 className="font-semibold">
            {b.tripTitle}
          </h2>

          <p>Seats: {b.numberOfSeats}</p>

          <p>Amount: ₹{b.amount}</p>

        </div>
      ))}

    </div>

  )

}