const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Optional: Prevents long waits if MongoDB isn't available
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error!"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    if (!Array.isArray(cities) || cities.length === 0) {
        console.error("Error: 'cities' array is empty or not defined.");
        return;
    }
    await Campground.deleteMany({});
    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * cities.length);
        console.log("Random index:", randomIndex, "City:", cities[randomIndex]);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[randomIndex].city}, ${cities[randomIndex].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,

            image:`https://media.istockphoto.com/id/584589782/photo/tents-camping-area-early-morning-beautiful-natural-place.jpg?s=1024x1024&w=is&k=20&c=6tCizSh4xSZm39LJuiEhc3o0DNksAQ425QBnzJvSoEA=`,

            description: "A beautiful campground with stunning views and great amenities.",
            price: price,
        });

        await camp.save();
    }

    mongoose.connection.close();
};

seedDB().then(() => {
    mongoose.connection.close();
});
