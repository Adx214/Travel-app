import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
const memories = [
  {
    id: "1",
    title: "Kyoto, Japan",
    date: "Summer 2023",
    desc: "A journey through ancient temples and serene gardens.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWLWUIRGHDAvV9uCv85tsIBhvxQTeVLXR52SEXpCHUgtg3gTaplYfKIaqeVK4R3PyYizjCQOlnzcywHCjdQEku8oR51qBsIRPPJkZTQ6IP7qi0BHKGKjfYvrgXQ2C1YCwQ9OG03PvhX7rGDnvCHx02TcdT7gP6BsDw6r0HE5KD1B6s8RudZWOI9x9BUHS5qNfNzf_Z6Y60tH-yA-gVPKvstV6Lq71PPpFcO8Jtxg_4k3JvyfSPmXjXEt7wuDe37IIdavF4Ioz95yJJ"
  },
  {
    id: "2",
    title: "Patagonia",
    date: "Spring 2023",
    desc: "Unforgettable trek through amazing landscapes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbKOB-HyoHbPLGr_5w1E86Jzi0jPdFIlmR1M2cosTE_PdSKK_8Vbdp3aOZuK69kH9CBNqF_zdovgHPHoBkUCepfbAohlRV-Ms9sLcS1_6WG7Kg9dCZwnS6-XgZCUFHpB9jvC7WhF0ZUkVVrJ4cc1j2hgY4y_6RgjQk2XxEED17yWW7KEKvxWzV5fXCLLemFityWEV_KRNYF5bsXriWgRs5S2mYED3AnobvGhCXy0lCsUbztfeWpukrJ4NoBLcKwFn3skd2UW8YUmm5"
  }
];

const ViewMemory = () => {
  const [memory, setmemory] = useState('')
  const [url, seturl] = useState('')
  const [ImgPop, setImgPop] = useState(false);

  const { id } = useParams();           // 👈 GET ID FROM URL
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMemory = async () => {
      const res = await axios.get(`http://localhost:3000/api/getmemory/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res);
      if (res.status === 200) {
        const mem = res.data.memory;
        setmemory(mem);
        console.log(memory.imageUrl);
        seturl(`http://localhost:3000${mem.imageUrl}`)
        console.log("URL IS ", url);


      } else {
        alert("Failed to fetch memory. Please try again.");

      }

    }
    fetchMemory();
  }, [])
  const deleteHandler = async () => {
    const res = await axios.delete(`http://localhost:3000/api/deletememory/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if (res.status === 200) {
      alert("Memory deleted successfully");
      navigate(-1);
    } else {
      alert("Failed to delete memory. Please try again.");
    }
  }


  if (!memory) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Memory not found 😢
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-background-light text-[#111618] p-6 flex justify-center">

      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

        {/* IMAGE */}
        <div
          className="w-full h-80 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${url})` }}
          onClick={() => setImgPop(true)}
        ></div>
        {ImgPop && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setImgPop(false)}
          >
            <img
              src={url}
              alt="Full Memory"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute top-8 right-8 text-white text-4xl font-bold"
              onClick={() => setImgPop(false)}
            >
              &times;
            </button>
          </div>
        )}

        {/* CONTENT */}
        <div className="p-8">

          {/* BUTTONS */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              ← Back
            </button>

            <button
              onClick={() => deleteHandler()}
              className="px-5 py-2 bg-red-700 text-white rounded-lg font-semibold hover:bg-primary/90"
            >
              Delete Memory
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-black mb-2">{memory.title}</h1>

          {/* DATE */}
          <p className="text-gray-500 mb-6">{memory.date}</p>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-base leading-relaxed">
            {memory.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewMemory;
