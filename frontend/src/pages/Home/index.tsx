import { Link } from "react-router-dom";

const Home = () => {
    return (
        <><div className="container">
            <div className="jumbotron">
                <h1 className="display-4">DSVendas</h1>
                <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                <hr />
                <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>

                <Link className="btn btn-primary btn-lg" to="/dashboard">
                    Acessar dashboard
                </Link>
            </div>
        </div><footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://github.com/felipemmarcello" target="_blank" rel="noreferrer">Felipe Moraes</a></p>
                    <p className="text-light"><small><strong>Semana Spring React</strong><br />
                        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                </div>
            </footer></>
    );
}

export default Home;
