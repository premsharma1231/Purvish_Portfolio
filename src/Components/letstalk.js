import React, { useState } from 'react';
import { FaPaperPlane, FaRedo, FaUser, FaEnvelope, FaCommentDots, FaStar } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function LetsTalk() {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "scroll";

  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', rating: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.feedback || !formData.rating) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const emailParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.feedback,
      rating: formData.rating,
      to_name: "Purvish Sharma", // Change dynamically if needed
    };

    emailjs.send('service_z7r4rtd', 'template_wfwfwsi', emailParams, 'EHOESy6pHMf-5STpw')
      .then((response) => {
        alert("Message Sent Successfully!");
        setFormData({ name: '', email: '', feedback: '', rating: '' });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(`Failed to send message: ${error.text || "Please try again later."}`);
      });
  };

  return (
    <div className='flex mt-10 mb-10 justify-center'>
      <div className='w-8/12 p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-center font-kanit text-black'>SEND ME AN EMAIL</h2>
        <p className='text-gray-400 text-center mb-6'>We are very responsive to messages!!</p>
        <form onSubmit={sendEmail} className='space-y-6'>
          <div>
            <label className='flex items-center text-black'><FaUser className='mr-2'/> Name:</label>
            <input type='text' name='name' value={formData.name} onChange={handleInputChange} required className='w-full p-3 border-2 border-gray-300 rounded' placeholder='Your Name' />
          </div>
          <div>
            <label className='flex items-center text-black'><FaEnvelope className='mr-2'/> Email:</label>
            <input type='email' name='email' value={formData.email} onChange={handleInputChange} required className='w-full p-3 border-2 border-gray-300 rounded' placeholder='Your Email' />
          </div>
          <div>
            <label className='flex items-center text-black'><FaCommentDots className='mr-2'/> Message:</label>
            <textarea name='feedback' value={formData.feedback} onChange={handleInputChange} required className='w-full p-3 border-2 border-gray-300 rounded' rows='4' placeholder='Your Feedback'></textarea>
          </div>
          <div>
            <label className='text-black'>Rating:</label>
            <select name='rating' value={formData.rating} onChange={handleInputChange} required className='ml-2 border-2 border-gray-300 rounded p-2'>
              <option value=''>Choose...</option>
              <option value='1'>1 ⭐</option>
              <option value='2'>2 ⭐⭐</option>
              <option value='3'>3 ⭐⭐⭐</option>
              <option value='4'>4 ⭐⭐⭐⭐</option>
              <option value='5'>5 ⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className='flex justify-between'>
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center'>
              <FaPaperPlane className='mr-2' /> Submit
            </button>
            <button type='button' onClick={() => setFormData({ name: '', email: '', feedback: '', rating: '' })} className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded flex items-center'>
              <FaRedo className='mr-2' /> Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LetsTalk;
