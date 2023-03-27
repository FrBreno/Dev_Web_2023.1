// import MeusDadosV1 from "./components/atividade00/01MeusDados";
// import MeusDadosV2 from "./components/atividade00/02MeusDados";
// import Temperatura from "./components/atividade00/03Temperatura";

// import Pai from './components/atividade01/questao01/01Pai';
// import MeuPc from "./components/atividade01/02MeuPc";
import { World, Arena } from './components/atividade01/03Batalha';

function App() {
  return (
    <div className="App">
      <World nome="Rinha de animes">
        <Arena />
      </World>
    </div>
  );
}

export default App;
