import MeusDadosV1 from "./components/atividade00/01MeusDados";
import MeusDadosV2 from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura"

function App() {
  return (
    <div className="App">
      <div>
        {/* <MeusDadosV1 /> */}
        <MeusDadosV2 
          nome="Francisco Breno da Silveira"
          curso="Ciência da Computação"
          universidade="Universidade Federal do Ceará (UFC) - Campus Quixadá"
        />
      </div>
      <div>
        <Temperatura 
          Tcelsius={21}
          Tfahrenheit={21}
          Tkelvin={21}
        />
      </div>
    </div>
  );
}

export default App;
