// Base URL — will be used in axiosInstance.js
export const BASE_URL = "http://localhost:8000/api"; // Make sure your backend uses /api prefix

//  API Endpoints
export const API_PATHS = {
    FEEDBACK: {
        SUBMIT: "/feedback",           // POST – student feedback form
        GET_ALL: "/feedback",         // GET – all feedbacks (admin only)
        DELETE: (id) => `/feedback/${id}`, // DELETE – delete by ID
    },
    ADMIN: {
        LOGIN: "/auth/login",         // POST – admin login
    },
};
