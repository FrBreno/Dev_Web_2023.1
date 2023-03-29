import MinhaCor from './MeuContexto';
import { useContext } from 'react';

const FuncaoD = () => {
    const cor = useContext(MinhaCor);
    return (
        <div>
            <h1 style={{backgroundColor: cor}}>Função D</h1>
        </div>
    );
}

export default FuncaoD;