import mongoose from "mongoose";

const setInfoSchema = new mongoose.Schema({
    tagName: { type: String, required: true },
    userName: { type: String, required: false },
    date: { type: String, required: false }

    
});

export default mongoose.model('SetInfo', setInfoSchema);