import FuncaoB from './FuncaoB';
import FuncaoC from './FuncaoC';
import MinhaCor from './MeuContexto';

const FuncaoA = () => {
    const cor = 'cyan';

    return (
        <MinhaCor.Provider value={cor}>
            <div>
                <h1 style={{backgroundColor: cor}}>Funcação A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    );
}

export default FuncaoA;