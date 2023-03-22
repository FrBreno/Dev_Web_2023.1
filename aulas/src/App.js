// import HelloWorld from './components/00HelloWorld';
// import Calculadora from './components/01Calculadora';
// import MyProps from './components/02MyProps';
// import FunctionA from './components/03 Hierarquia/FunctionA';

// import { Header, Body, Footer } from './components/04Multiplo';
// import * as Site from './components/04Multiplo';

import {Supermercado, Legume, Bebidas} from './components/05Children';

function App() {
  return (
    <div className='App'>
      <Supermercado nome='DuPovu'>
        <Legume nome='Batata' />
        <Bebidas nome='Café' />
      </Supermercado>
    </div>
  );
}

export default App;
