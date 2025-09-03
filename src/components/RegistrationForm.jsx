import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    alert("Cadastro realizado com sucesso!");
  };

  const senha = watch("senha", ""); // observa o valor do campo senha

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "0 auto" }}>
      {/* Nome */}
      <div>
        <label>Nome:</label>
        <input
          {...register("nome", { required: "Nome é obrigatório", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}
        />
        {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email é obrigatório",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      {/* Senha */}
      <div>
        <label>Senha:</label>
        <input
          type="password"
          {...register("senha", { required: "Senha é obrigatória", minLength: { value: 6, message: "Mínimo 6 caracteres" } })}
        />
        {errors.senha && <p style={{ color: "red" }}>{errors.senha.message}</p>}
      </div>

      {/* Confirmação de Senha */}
      <div>
        <label>Confirme a Senha:</label>
        <input
          type="password"
          {...register("confirmacaoSenha", {
            required: "Confirmação de senha é obrigatória",
            validate: (value) => value === senha || "As senhas não coincidem",
          })}
        />
        {errors.confirmacaoSenha && <p style={{ color: "red" }}>{errors.confirmacaoSenha.message}</p>}
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>Cadastrar</button>
    </form>
  );
};

export default RegistrationForm;
