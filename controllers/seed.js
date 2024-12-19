const Clothing = require('../models/clothing');
const clothing = require('../data/clothing')




async function seedData(req, res) {
    try {
        await Clothing.insertMany(clothing);
        res.status(201).send('Clothing inventory seeded successfully')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error fetching inventory')
    }
}



module.exports = { seedData }
