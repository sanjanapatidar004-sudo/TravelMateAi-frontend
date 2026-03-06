import { useState } from "react"

export default function MyBookings() {

  const [bookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || []
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6">

      <h1 className="text-3xl font-bold mb-8">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">
          You haven't booked any trips yet.
        </p>
      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {bookings.map((b, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >

              <h2 className="text-xl font-semibold">
                {b.tripName}
              </h2>

              <p className="text-gray-500 mt-2">
                Seats: {b.seats}
              </p>

              <p className="text-gray-700 font-semibold mt-2">
                Total: ₹{b.totalPrice}
              </p>

              <span className="text-green-600 text-sm">
                Confirmed
              </span>

            </div>

          ))}

        </div>
      )}

    </div>
  )
}