const router = require('express'). Router();
const clothingCtrl = require('../controllers/clothing');



router.get('/clothing',clothingCtrl.index);
router.get('/clothing/new', clothingCtrl.newClothing);
router.post('/clothing', clothingCtrl.postClothing);
router.get('/clothing/:id', clothingCtrl.showClothing);
router.get('/clothing/:id/edit',clothingCtrl.editClothing);
router.put('/clothing/:id', clothingCtrl.updateClothing);
router.delete('/clothing/:id', clothingCtrl.deleteClothing);

module.exports = router;