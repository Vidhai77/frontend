"use client"; // Ensure this is treated as a client-side component

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const AssignTenderComponent = ({ projectId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectId) {
      alert("Project ID is missing!");
      return;
    }

    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        alert("Authorization token is missing. Please log in.");
        return;
      }

      const response = await axios.put(
        `https://backend-1-auu3.onrender.com/api/projects/${projectId}/assign-tenderer`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      alert("Tenderer assigned successfully!");
      router.push("/dhead");
    } catch (error) {
      console.error("Error assigning tenderer:", error);
      alert("Failed to assign tenderer. Please try again.");
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Assign Tender</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Phone"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AssignTenderComponent;
