const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type : String,
        required: true
    },
    description: String,
    image:{
        type: String,
        set: (v) => v ==="" ? "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww" : v,
    },  
    price: Number,   
    location : String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;