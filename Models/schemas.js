const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    logo: String,
    website: String,
    Country: String,
    phoneNumber: String,
    Meals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Meal'}]
});

const MealSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    MB: Boolean,
    Restaurant: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}
});

module.exports = {
    Restaurant: mongoose.model('Restaurant', RestaurantSchema),
    Meal: mongoose.model('Meal', MealSchema)
};
