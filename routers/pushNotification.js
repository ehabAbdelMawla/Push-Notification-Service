const express = require('express');
const { send, subscribe, unsubscribe } = require("../controllers/pushNotification")
const router = express.Router();

router.route("/pushNotification").post(send)
router.route("/subscribe").post(subscribe)
router.route("/unsubscribe/:userId").delete(unsubscribe)

module.exports = router;