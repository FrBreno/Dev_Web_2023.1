import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom"
import { useState } from "react"

const MyMenu = () => {

    const [anchorElProfessor, setAnchorElProfessor] = useState(null);

    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget);
    }
    const handleCloseAnchorElProfessor = () => {
        setAnchorElProfessor(null)
    }

    const dropProfMenu = () => {
        return (
            <Box>
                <Button 
                    sx={{color: '#fff'}}
                    onClick={handleOpenAnchorElProfessor}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem 
                        onClick={() => {
                            handleCloseAnchorElProfessor()
                        }}
                        component={Link}
                        to="cadastrar-professor"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleCloseAnchorElProfessor()
                        }}
                        component={Link}
                        to="listar-professor"
                    >
                        Listar
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleCloseAnchorElProfessor()
                        }}
                        component={Link}
                        to="editar-professor"
                    >
                        Editar
                    </MenuItem>
                </Menu>
            </Box>
        );
    }

    return (
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <AdbIcon 
                        sx={{
                            display: {xs: 'none', md: 'flex'},
                            mr: 1
                        }}
                    />
                    <Typography
                        variant='h5'
                        component='a'
                        href='/'
                        sx={{
                            textDecoration: 'none',
                            color: '#fff',
                            fontFamily: 'monospace',
                            letterSpacing:'.3rem',
                            fontWeight: 800
                        }}
                    >
                        CRUD_V1
                    </Typography>

                    <Box
                        sx={{
                            my: 2,
                            ml: 3,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        {dropProfMenu()}
                        <Button
                            sx={{
                                color: '#fff',
                            }}
                        >
                            Alunos
                        </Button>
                        <Button
                            sx={{
                                color: '#fff',
                            }}
                        >
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default MyMenu;