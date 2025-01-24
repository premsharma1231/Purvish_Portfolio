import React, { useState } from 'react';
import { FaCamera, FaPaperPlane, FaRedo, FaUser, FaEnvelope, FaCommentDots, FaStar, FaUpload } from 'react-icons/fa';

function LetsTalk() {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll";
  
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', rating: '', images: [] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form logic here
  };

  const handleImageChange = (e) => {
    // Image upload logic here
    console.log(e.target.files);
  };

  return (
    <div className='absolute w-full top-32 flex justify-center'>

    <div className='mx-auto p-8 bg-gray-100 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold text-center text-blue-900'>SEND ME AN EMAIL</h2>
      <p className='text-gray-700 text-center mb-6'>We are very responsive to messages!!</p>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label htmlFor='name' className='flex items-center text-blue-900'><FaUser className='mr-2'/> Name:</label>
          <input type='text' id='name' name='name' placeholder='Your Name' className='w-full p-3 border-2 border-gray-300 focus:border-blue-900 rounded mt-1' onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor='email' className='flex items-center text-blue-900'><FaEnvelope className='mr-2'/> Email:</label>
          <input type='email' id='email' name='email' placeholder='Your Email' className='w-full p-3 border-2 border-gray-300 focus:border-blue-900 rounded mt-1' onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor='feedback' className='flex items-center text-blue-900'><FaCommentDots className='mr-2'/> Detailed Feedback:</label>
          <textarea id='feedback' name='feedback' placeholder='Your Feedback' className='w-full p-3 border-2 border-gray-300 focus:border-blue-900 rounded mt-1' rows='4' onChange={handleInputChange} required></textarea>
        </div>
        <div className='flex items-center justify-between'>
          <button className='text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center'>
            <FaUpload className='mr-2' /> Upload Image
            <input type='file' className='hidden' onChange={handleImageChange} multiple />
          </button>
          <div>
            <label className='text-blue-900'>Rating:</label>
            <select name='rating' onChange={handleInputChange} className='ml-2 border-2 border-gray-300 focus:border-blue-900 rounded p-2'>
              <option value=''>Choose...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center'>
            <FaPaperPlane className='mr-2' /> Submit
          </button>
          <button type='button' className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded inline-flex items-center' onClick={() => setFormData({ name: '', email: '', feedback: '', rating: '', images: [] })}>
            <FaRedo className='mr-2' /> Reset
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LetsTalk;