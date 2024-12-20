"use strict"

const {mongoose} = require("../configs/dbConnection")

const BlogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    content: {
        type: String,
        required: [true, 'Content is required!'],
        trim: true
    },

    image: {
        type: String,
        required: true,
        trim: true
    },

    isPublish: {
        type: Boolean,
        default: true
    },

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],

    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    countOfVisitors: {
        type: Number,
        default: 0
    },
}, {
    collection: "blogs",
    timestamps: true
})

module.exports = mongoose.model("Blog", BlogSchema)

