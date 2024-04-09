import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Id: {
        type: Number,
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    owner: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true, // Index the createdAt field
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Pre-save hook to update the updatedAt field
// schema.pre('save', function(next) {
//     this.updatedAt = new Date();
//     next();
// });

export const Property = mongoose.model('Blog', schema);
