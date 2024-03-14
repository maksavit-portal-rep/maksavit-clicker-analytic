import mongoose from "mongoose";

const setButtonNameSchema = new mongoose.Schema({
    buttonName: { type: String, required: true }
    
});

export default mongoose.model('ButtonName', setButtonNameSchema);