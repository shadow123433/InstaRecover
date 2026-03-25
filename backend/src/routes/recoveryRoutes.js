const express = require("express");
const router = express.Router();

const { handleRecovery } = require("../controllers/recoveryController");

router.post("/", handleRecovery);

module.exports = router;