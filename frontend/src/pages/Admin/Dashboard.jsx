import React, { useState, useEffect } from 'react';
import { FaSearch, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';
import Navbar from '../../components/layout/Navbar';

const Dashboard = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    // Hardcoded feedbacks
    const hardcodedFeedbacks = [
        {
            _id: '1',
            name: 'Fatima',
            email: 'fatima@gmail.com',
            course: 'React.js',
            rating: 5,
            comments: 'Amazing course',
            createdAt: new Date().toISOString(),
        },
        {
            _id: '2',
            name: 'Noor',
            email: 'noor@example.com',
            course: 'Node.js',
            rating: 4,
            comments: 'Very informative.',
            createdAt: new Date().toISOString(),
        },
        {
            _id: '3',
            name: 'Abbas',
            email: 'abbas@gmail.com',
            course: 'Express.js',
            rating: 3,
            comments: 'Good but can improve.',
            createdAt: new Date().toISOString(),
        },
        {
            _id: '4',
            name: 'Ali',
            email: 'ali@gmail.com',
            course: 'MongoDB',
            rating: 4,
            comments: 'Loved it!',
            createdAt: new Date().toISOString(),
        },
        {
            _id: '5',
            name: 'Ayesha',
            email: 'ayesha@gmail.com',
            course: 'React.js',
            rating: 5,
            comments: 'Highly recommended',
            createdAt: new Date().toISOString(),
        },
    ];

    useEffect(() => {
        // Set hardcoded feedbacks on first render
        setFeedbacks(hardcodedFeedbacks);
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this feedback?');
        if (!confirmDelete) return;
        const updated = feedbacks.filter(fb => fb._id !== id);
        setFeedbacks(updated);
    };

    const filtered = feedbacks.filter(fb =>
        fb.course.toLowerCase().includes(search.toLowerCase())
    );

    const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="min-h-screen bg-[#f9fafb]">
            <Navbar />
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <MdOutlineRateReview className="text-blue-600 text-3xl" />
                        Admin Feedback Dashboard
                    </h2>
                </div>

                {/* Search */}
                <div className="mb-5 relative">
                    <FaSearch className="absolute top-3 left-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by course..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Table */}
                <div className="overflow-auto rounded-lg shadow bg-white">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-blue-600 text-white uppercase text-xs">
                            <tr>
                                <th className="px-4 py-3 border">Name</th>
                                <th className="px-4 py-3 border">Email</th>
                                <th className="px-4 py-3 border">Course</th>
                                <th className="px-4 py-3 border">Rating</th>
                                <th className="px-4 py-3 border">Comments</th>
                                <th className="px-4 py-3 border">Date</th>
                                <th className="px-4 py-3 border text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {paginated.length ? (
                                paginated.map(fb => (
                                    <tr key={fb._id} className="border-t hover:bg-gray-50 transition">
                                        <td className="px-4 py-2 border">{fb.name}</td>
                                        <td className="px-4 py-2 border">{fb.email}</td>
                                        <td className="px-4 py-2 border">{fb.course}</td>
                                        <td className="px-4 py-2 border">{fb.rating}</td>
                                        <td className="px-4 py-2 border">{fb.comments}</td>
                                        <td className="px-4 py-2 border">
                                            {new Date(fb.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                            <button
                                                onClick={() => handleDelete(fb._id)}
                                                className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 rounded-md text-xs font-semibold flex items-center justify-center gap-1"
                                            >
                                                <FaTrashAlt />
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-6 text-gray-500">
                                        No feedbacks found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => setPage(p => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="text-gray-700 font-medium">Page {page}</span>
                    <button
                        onClick={() => setPage(p => p + 1)}
                        disabled={page * itemsPerPage >= filtered.length}
                        className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
