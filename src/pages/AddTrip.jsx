import { useState } from "react";
import { apiCall } from "../services/api";
import { toast } from "react-toastify";

export default function AddTrip(){

  const [form,setForm] = useState({
    title:"",
    destination:"",
    price:"",
    imageUrl:""
  });

  const handleChange = (e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = async()=>{

    const res = await apiCall("/admin/trips","POST",form);

    if(res.status==="success"){
      toast.success("Trip added");
    }else{
      toast.error("Failed");
    }

  }

  return(

    <div className="max-w-xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        Add Trip
      </h1>

      <input
      name="title"
      placeholder="Title"
      onChange={handleChange}
      className="border p-2 w-full mb-4"
      />

      <input
      name="destination"
      placeholder="Destination"
      onChange={handleChange}
      className="border p-2 w-full mb-4"
      />

      <input
      name="price"
      placeholder="Price"
      onChange={handleChange}
      className="border p-2 w-full mb-4"
      />

      <input
      name="imageUrl"
      placeholder="Image URL"
      onChange={handleChange}
      className="border p-2 w-full mb-4"
      />

      <button
      onClick={handleSubmit}
      className="bg-blue-600 text-white px-6 py-2 rounded"
      >
      Add Trip
      </button>

    </div>

  )

}