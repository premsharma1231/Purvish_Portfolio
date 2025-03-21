import React, { useState, useContext } from "react";
import { FaPaperPlane, FaRedo, FaUser, FaEnvelope, FaCommentDots, FaStar } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { WebModeContext } from "./WebModeContext";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

function LetsTalk() {
  const { webMode } = useContext(WebModeContext);
  document.body.style.overflow = "hidden auto";

  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', rating: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback || !formData.rating) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill in all fields before submitting!",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    setLoading(true);

    const emailParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.feedback,
      rating: formData.rating,
      to_name: "Purvish Sharma",
    };

    emailjs.send('service_z7r4rtd', 'template_wfwfwsi', emailParams, 'EHOESy6pHMf-5STpw')
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully!",
          text: "I'll get back to you soon 😊",
          showConfirmButton: false,
          timer: 3000,
        });
        setFormData({ name: '', email: '', feedback: '', rating: '' });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to Send 😢",
          text: error.text || "Please try again later.",
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className='flex justify-center mt-10 mb-10 px-4'>
      <div className={`w-full max-w-2xl p-8 rounded-lg shadow-lg ${webMode === "Light" ? "bg-transparent" : "bg-DarkModeBg"}`}>
        <h2 className='text-2xl sm:text-3xl font-bold text-center font-Karla text-black'>SEND ME AN EMAIL</h2>
        <p className='text-gray-400 text-center mb-6 text-sm sm:text-base'>We are very responsive to messages!!</p>
        
        {loading && (
          <div className="w-full bg-gray-300 h-2 rounded overflow-hidden">
            <div className="bg-blue-500 h-full animate-pulse"></div>
          </div>
        )}

        <form onSubmit={sendEmail} className='space-y-6 mt-4'>
          <div>
            <label className='flex items-center text-black text-sm sm:text-base'><FaUser className='mr-2'/> Name:</label>
            <input type='text' name='name' value={formData.name} onChange={handleInputChange} required 
              className='w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' 
              placeholder='Your Name' />
          </div>
          <div>
            <label className='flex items-center text-black text-sm sm:text-base'><FaEnvelope className='mr-2'/> Email:</label>
            <input type='email' name='email' value={formData.email} onChange={handleInputChange} required 
              className='w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' 
              placeholder='Your Email' />
          </div>
          <div>
            <label className='flex items-center text-black text-sm sm:text-base'><FaCommentDots className='mr-2'/> Message:</label>
            <textarea name='feedback' value={formData.feedback} onChange={handleInputChange} required 
              className='w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' 
              rows='4' placeholder='Your Feedback'></textarea>
          </div>
          <div>
            <label className='text-black text-sm sm:text-base'>Rating:</label>
            <select name='rating' value={formData.rating} onChange={handleInputChange} required 
              className='ml-2 border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'>
              <option value=''>Choose...</option>
              <option value='1'>1 ⭐</option>
              <option value='2'>2 ⭐⭐</option>
              <option value='3'>3 ⭐⭐⭐</option>
              <option value='4'>4 ⭐⭐⭐⭐</option>
              <option value='5'>5 ⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className='flex flex-col sm:flex-row justify-between gap-4'>
            <button type='submit' disabled={loading} className={`w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
              {loading ? "Sending..." : <> <FaPaperPlane className='mr-2' /> Submit</>}
            </button>
            <button type='button' onClick={() => setFormData({ name: '', email: '', feedback: '', rating: '' })} 
              className='w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded flex items-center justify-center'>
              <FaRedo className='mr-2' /> Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LetsTalk;
