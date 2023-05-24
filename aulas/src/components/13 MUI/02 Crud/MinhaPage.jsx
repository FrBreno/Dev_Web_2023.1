import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material';

import MyMenu from './MyMenuV1';
import CadastrarProfessor from './professor/Cadastrar';
import EditarProfessor from './professor/Editar';
import ListarProfessor from './professor/Listar';


const MinhaPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:5, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Routes>
                    <Route path='cadastrar-professor' element={<CadastrarProfessor />} />
                    <Route path='listar-professor' element={<ListarProfessor />} />
                    <Route path='editar-professor' element={<EditarProfessor />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default MinhaPage;