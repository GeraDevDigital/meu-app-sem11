import { Link } from "react-router-dom";

const HomePage = () => {
  const produtos = [
    { id: 1, nome: "Produto 1" },
    { id: 2, nome: "Produto 2" },
    { id: 3, nome: "Produto 3" },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {produtos.map(prod => (
          <li key={prod.id}>
            <Link to={`/produtos/${prod.id}`}>{prod.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
