import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CadastrarProfessor = () => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [titulacao, setTitulacao] = useState('GRAD');
    const [ai, setAi] = useState({cg:false, mc:false,al:false,es:false});

    const {cg, mc, al, es} = ai;

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`${nome} - ${curso}`)
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
                Cadastrar Professor
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
                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}
                    />
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
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
                <Box sx={{display: "flex", justifyContent: "center", mt: 2}}>
                    <Button type="submit" variant="contained">
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default CadastrarProfessor;