// router.get('/clothing',clothingCtrl.index);
// router.get('/clothing/new', clothingCtrl.newClothing);
// router.post('/clothing', clothingCtrl.postClothing);
// router.get('/clothing/:id', clothingCtrl.showClothing);
// router.get('/clothing/:id/edit',clothingCtrl.editClothing);
// router.put('/clothing/:id', clothingCtrl.updateClothing);
// router.delete('/clothing/:id', clothingCtrl.deleteClothing);

const Clothing = require('../models/clothing')

async function index(req, res) {
    try {
        const clothing = await Clothing.find({})
        console.log(clothing)
        res.render('index', { name: 'Clothing Inventory', clothing })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

function newClothing(req, res) {
    res.render('new', { name: 'New Wardrobe' })
}

async function postClothing(req, res) {
    try {
        const { name, description ,category,number} = req.body;
        const newClothing = new Clothing({
            name: name,
            description: description,
            category:category,
            number:number
        })
        await newClothing.save();
        res.status(201).redirect('/clothing')
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")

    }
}

async function showClothing(req, res) {
    const { id } = req.params;
    try {
        const clothingItem = await Clothing.findById(id);// Fetch the item by ID
        if (!clothingItem) {
            return res.status(404).send("Item not found");
        }
        res.render("show", { item: clothingItem });// Pass the item to show.ejs
    } catch (error) {
        console.error("Error fetching clothing item:", err);
        res.status(500).send("Error fetching item");
    }

}

async function editClothing(req, res) {
    const { id } = req.params;
    try {
        const clothingItem = await Clothing.findById(id); // Fetch the item by ID

        if (!clothingItem) {
            return res.status(404).send("Item not found");
        }
        console.log(clothingItem)
        res.render("edit.ejs", { item: clothingItem, }) // Pass the item to edit.ejs
    } catch (error) {
        console.error("Error fetching item for edit", error);
        res.status(500).send("Error fetching item for edit");
    }
}

async function updateClothing(req, res) {
console.log('number')
    try {
        const { id } = req.params;
        const { name, description, number } = req.body;

        const updateClothing = await Clothing.findByIdAndUpdate(id, req.body);
        if (updateClothing) {
            res.status(200).redirect("/clothing")
        }
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).send("Error updating item");
    }
}


async function deleteClothing(req, res) {
    const { id } = req.params;
    try {
        await Clothing.findByIdAndDelete(id);
        res.redirect("/clothing");//Redirect to the homepage after deletion
    } catch (error) {
        console.error("Error deleting item:", err);
        res.status(500).send("Error deleting item");
    }
}














module.exports = { index, newClothing, postClothing, editClothing, updateClothing, showClothing, deleteClothing }