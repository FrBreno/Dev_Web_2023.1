import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ListarProfessor = () => {
    // const professores = [
    //     {id: 0, nome: 'Vito Corleone', curso: 'SI', titulacao: 'MEST'},
    //     {id: 1, nome: 'Michael Corleone', curso: 'DD', titulacao: 'GRAD'},
    //     {id: 2, nome: 'Luca Brasi', curso: 'SI', titulacao: 'MEST'},
    //     {id: 3, nome: 'Kay Adams', curso: 'SI', titulacao: 'DOUT'},
    //     {id: 4, nome: 'Peter Clemenza', curso: 'CC', titulacao: 'MEST'},
    // ];

    const [professores, setProfessores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/professores/listar')
            .then(async res => setProfessores(await res.json()))
            .catch(error => console.log('Não foi possível recuperar os professores cadastrados', error));
    }, []);

    function deleteProfessorById(id) {
        if(window.confirm("Deseja Excluir?")) {
            fetch(`http://localhost:3001/professores/delete/${id}`, {
                method: 'DELETE',
            })
            .then(res => {
                if (res.ok) {
                    alert(`Professor de ID ${id} excluído com sucesso`);
                    setProfessores(professores.filter(prof => prof._id != id));
                    navigate('/listar-professor');
                } else {
                    alert('Erro ao excluir porfessor!');
                }
            })
            .catch(error => console.log('Error ao excluir professor', error));
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">Listar Professor</Typography>
            <TableContainer component={Paper} sx={{mt:4, mb:4}}>
                <Table sx={{minWidth:650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            professores.map(prof => {
                                return (
                                    <StyledTableRow key={prof._id}>
                                        <StyledTableCell>{prof._id}</StyledTableCell>
                                        <StyledTableCell>{prof.nome}</StyledTableCell>
                                        <StyledTableCell>{prof.curso}</StyledTableCell>
                                        <StyledTableCell>{prof.titulacao}</StyledTableCell>
                                        <StyledTableCell>
                                            <Box>
                                                <IconButton 
                                                    aria-label="edit" 
                                                    color="primary" 
                                                    component={Link} 
                                                    to={`/editar-professor/${prof._id}`}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton 
                                                    aria-label="delte" 
                                                    color="error" 
                                                    onClick={() => 
                                                    deleteProfessorById(prof._id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
'&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
},
// hide last border
'&:last-child td, &:last-child th': {
    border: 0,
},
}));
export default ListarProfessor;