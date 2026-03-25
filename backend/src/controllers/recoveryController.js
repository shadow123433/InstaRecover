const { generateRecoveryPlan } = require("../services/recoveryService");

exports.handleRecovery = (req, res) => {
  const { problem, emailAccess } = req.body;

  // validação básica
  if (!problem) {
    return res.status(400).json({
      error: "Problema não informado"
    });
  }

  try {
    const result = generateRecoveryPlan(problem, emailAccess);

    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno no servidor"
    });
  }
};