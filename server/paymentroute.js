const {Router}= require('express');
const {checkout,paymentroute,getKey}= require('./checkout');



const router= Router();
router.post('/check',checkout)
router.post('/payment',paymentroute)
router.get('/getkey',getKey)


module.exports = router;