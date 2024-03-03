import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    managerName: {
        type: String,
        required: true
    },
    teamMemberCount: {
        type: Number,
        default: 0
    },
    teamMembers: [String], 
    notes: String
});


const Project = mongoose.model('Project', projectSchema);

export default Project;
