const Feedback = require("../models/Feedback");

// Submit feedback
const submitFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.create(req.body);
        res.status(201).json(feedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all feedbacks
const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get feedback by ID
const getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) return res.status(404).json({ message: "Feedback not found" });
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!feedback) return res.status(404).json({ message: "Feedback not found" });
        res.json({ message: "Feedback deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    submitFeedback,
    getAllFeedbacks,
    getFeedbackById,
    deleteFeedbackById,
};
