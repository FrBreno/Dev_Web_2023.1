import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CadastrarProfessor = () => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(`${nome} - ${curso}`)
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