// import MeusDadosV1 from "./components/atividade00/01MeusDados";
// import MeusDadosV2 from "./components/atividade00/02MeusDados";
// import Temperatura from "./components/atividade00/03Temperatura";

// import Pai from './components/atividade01/questao01/01Pai';
// import MeuPc from "./components/atividade01/02MeuPc";
// import { World, Arena } from './components/atividade01/03Batalha';

import FuncaoA from './components/atividade02/Q01/FuncaoA';
import ComponenteAvo from './components/atividade02/Q02/ComponenteAvo';
import ComponenteAvoV2 from './components/atividade02/Q03/ComponenteAvoV2';


function App() {
  return (
    <div className="App">
      <div>
        <h2>Questão 01</h2>
        <FuncaoA />
      </div>
      <div>
        <h2>Questão 02</h2>
        <ComponenteAvo />
      </div>
      <div>
        <h2>Questão 03</h2>
          <ComponenteAvoV2 />
      </div>
    </div>
  );
}

export default App;
