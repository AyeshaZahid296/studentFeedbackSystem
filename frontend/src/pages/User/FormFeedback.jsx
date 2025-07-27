import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import Navbar from '../../components/layout/Navbar';

const FormFeedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rating: '',
    comments: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const courseOptions = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { name, email, course, rating, comments } = formData;

    if (!name || !email || !course || !rating || !comments) {
      setError('Please fill all fields');
      return;
    }

    try {
      setLoading(true);
      await axiosInstance.post(API_PATHS.FEEDBACK.SUBMIT, formData);
      navigate('/thank-you');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[90vh] bg-gradient-to-b from-blue-50 to-white px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-10 rounded-xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Course Feedback Form
          </h2>

          {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Course</option>
              {courseOptions.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>

            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>

            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Your Comments"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition-all duration-300"
            >
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormFeedback;
