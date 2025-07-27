// Base URL — will be used in axiosInstance.js
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;; // Make sure your backend uses /api prefix

//  API Endpoints
export const API_PATHS = {
    FEEDBACK: {
        SUBMIT: "/api/feedback",           // POST – student feedback form
        GET_ALL: "/api/feedback",         // GET – all feedbacks (admin only)
        DELETE: (id) => `/feedback/${id}`, // DELETE – delete by ID
    },
    ADMIN: {
        LOGIN: "/api/auth/login",         // POST – admin login
    },
};
