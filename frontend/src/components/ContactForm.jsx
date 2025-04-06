import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    degree: '',
    college: '',
    batch: '',
    field: '',
    course: '',
    liurl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/contact', formData);
      console.log('Submitted:', res.data);
      toast.success("Form submitted successfully!");
    } catch (err) {
      console.error('Error submitting form:', err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 flex items-center justify-center" id='register' data-aos="fade-left" >
      <div className="w-full max-w-4xl bg-white border border-gray-400 rounded-2xl shadow-lg p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Register as an Alumni</h2>
        <ToastContainer 
        theme="dark"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              type="text"
              name="field"
              placeholder="Field You're Working In"
              value={formData.field}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
             <input
              type="text"
              name="batch"
              placeholder="Batch (e.g. 2024-25)"
              value={formData.batch}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
           
             <input
              type="text"
              name="course"
              placeholder="Course specialization (e.g. Data Science)"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              type="text"
              name="phone"
              placeholder="WhatsApp Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              type="text"
              name="liurl"
              placeholder="LinkedIn Profile URL"
              value={formData.liurl}
              onChange={handleChange}
              className="w-full px-8 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
           
           
          </div>

          <div className="text-center pt-1">
            <button
              type="submit"
              className="bg-black text-white px-10 py-3 text-lg rounded-xl hover:bg-gray-800 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      
      </div>
     
    </div>
  );
};

export default ContactForm;
