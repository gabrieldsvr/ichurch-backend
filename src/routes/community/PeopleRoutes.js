const express = require("express");
const router = express.Router();
const peopleController = require("../../controllers/community/peopleController");
const authMiddleware = require("../../middlewares/authMiddleware");

// 📌 Criar uma nova pessoa
router.post("/", authMiddleware, peopleController.createPerson);

// 📌 Listar todas as pessoas ativas
router.get("/", authMiddleware, peopleController.getAllPeople);

// 📌 Buscar uma pessoa pelo ID
router.get("/:id", authMiddleware, peopleController.getPersonById);

// 📌 Atualizar uma pessoa
router.put("/:id", authMiddleware, peopleController.updatePerson);

// 📌 Desativar uma pessoa (exclusão lógica)
router.delete("/:id", authMiddleware, peopleController.deactivatePerson);

router.patch("/:id/toggle-status",authMiddleware, peopleController.togglePersonStatus);

router.post("/import",authMiddleware, peopleController.uploadMiddleware, peopleController.importPeopleFile);

module.exports = router;
