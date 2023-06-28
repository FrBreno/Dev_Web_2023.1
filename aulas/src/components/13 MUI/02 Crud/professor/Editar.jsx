import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Editar = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    // Quebra Galhos:
    // const professores = [
    //     {id: 0, nome: 'Vito Corleone', curso: 'SI', titulacao: 'MEST', ai: {cg:true, mc:false,al:false,es:true}},
    //     {id: 1, nome: 'Michael Corleone', curso: 'DD', titulacao: 'GRAD', ai: {cg:false, mc:false,al:true,es:false}},
    //     {id: 2, nome: 'Luca Brasi', curso: 'SI', titulacao: 'MEST', ai: {cg:false, mc:false,al:true,es:false}},
    //     {id: 3, nome: 'Kay Adams', curso: 'SI', titulacao: 'DOUT', ai: {cg:false, mc:true,al:false,es:false}},
    //     {id: 4, nome: 'Peter Clemenza', curso: 'CC', titulacao: 'MEST', ai: {cg:false, mc:true,al:true,es:true}},
    // ];

    // function getProfessorById(id) {
    //     const professor = professores.find(prof => prof.id == id);
    //     return professor ? professor : null;
    // }
    //
    
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [titulacao, setTitulacao] = useState('GRAD');
    const [ai, setAi] = useState({cg:false, mc:false, al:false, es:false});

    const {cg, mc, al, es} = ai;

    useEffect(() => {
        // let { _, nome, curso, titulacao, ai } = getProfessorById(id);
        // setNome(nome);
        // setCurso(curso);
        // setTitulacao(titulacao);
        // setAi(ai);

        fetch(`http://localhost:3001/professores/retrieve/${id}`)
        .then(res => res.json())
        .then(data => {
            setNome(data.nome);
            setCurso(data.curso);
            setTitulacao(data.titulacao);
            setAi(data.ai);
        })
        .catch(error => console.log('Erro ao recuperar professor', error));
    }, []);

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`http://localhost:3001/professores/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome, curso, titulacao, ai}),
        })
        .then(res => {
            console.log('Professor Editado!');
            navigate('/listar-professor');
        })
        .catch(error => console.log('Erro ao editar novo professor!', error));;
    }

    function handleCheckbox(event) {
        setAi({
            ...ai,
            [event.target.name]: event.target.checked,
        })
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor
            </Typography>
            <Box
                sx={{width: "80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    value={nome}
                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}
                    />
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
                    value={curso}
                    id="curso"
                    name="curso"
                    onChange={(event) => setCurso(event.target.value)}
                />
                <FormControl sx={{mt:2, width:'100%'}} required>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{mt:2, ml:2, width:'100%'}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize:12, mb:2}}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={handleCheckbox} checked={cg} name="cg" />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox onChange={handleCheckbox} checked={mc} name="mc" />} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox onChange={handleCheckbox} checked={al} name="al" />} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox onChange={handleCheckbox} checked={es} name="es" />} label="Engenharia de Software" />
                    </FormGroup>
                </FormControl>
                <Box sx={{display: "flex", justifyContent: "center", mt: 2, mb: 2}}>
                    <Button type="submit" variant="contained">
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default Editar;