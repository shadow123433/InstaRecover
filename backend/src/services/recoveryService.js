function generateRecoveryPlan(problem, emailAccess) {

  if (problem === "hack") {
    if (emailAccess === "sim") {
      return {
        title: "Conta hackeada",
        message: "Redefina sua senha imediatamente e verifique sua conta.",
        link: "https://www.instagram.com/hacked/"
      };
    }

    return {
      title: "Conta hackeada sem acesso ao e-mail",
      message: "Solicite verificação de identidade ao Instagram.",
      link: "https://www.instagram.com/hacked/"
    };
  }

  if (problem === "senha") {
    return {
      title: "Senha esquecida",
      message: "Use a opção oficial para redefinir sua senha.",
      link: "https://www.instagram.com/accounts/password/reset/"
    };
  }

  if (problem === "email") {
    return {
      title: "Problema com e-mail",
      message: "Acesse o suporte do Instagram para recuperar o acesso.",
      link: "https://help.instagram.com/"
    };
  }

  return {
    title: "Erro",
    message: "Não foi possível identificar o problema.",
    link: "https://help.instagram.com/"
  };
}

module.exports = {
  generateRecoveryPlan
};