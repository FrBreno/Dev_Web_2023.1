import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"

const MyMenu = () => {
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
                        CRUD_V0
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
                        <Button
                            sx={{
                                color: '#fff',
                            }}
                        >   
                            Professores
                        </Button>
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