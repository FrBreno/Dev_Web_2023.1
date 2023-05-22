import { Container, Box, Typography, TextField, Button, Link } from '@mui/material'

const Signin = () => {
    return (
        <Container maxWidth='xs'>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}
            >
                <Typography
                    component='h1'
                    variant='h5'
                >
                    Sign In
                </Typography>
                <TextField 
                    required
                    margin='normal'
                    fullWidth
                    autoFocus

                    label='Endereço de e-mail'
                    id='email'
                    name='email'
                    type='email'
                />
                <TextField 
                    required
                    margin='normal'
                    fullWidth
                    autoFocus

                    label='Senha'
                    id='password'
                    name='password'
                    type='password'
                />
                <Button
                    fullWidth
                    variant='contained'
                    sx={{
                        my: 2
                    }}
                >
                    Sing In
                </Button>

                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link
                        underline='none'
                        href='#'
                    >
                        Esqueceu a senha?
                    </Link>
                    <Link
                        underline='none'
                        href='#'
                    >
                        Cadastre-se!
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default Signin;