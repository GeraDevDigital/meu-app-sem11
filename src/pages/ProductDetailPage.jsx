import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams(); // pega o id da rota
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // volta para a HomePage
  };

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>Produto ID: {id}</p>
      <button onClick={handleBack}>Voltar para Home</button>
    </div>
  );
};

export default ProductDetailPage;
