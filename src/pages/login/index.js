import { signInWithGoogle } from '../../firebase';
import { Button, Container, Typography } from '@mui/material'

const Login = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center" }}>
      <Typography variant="h3" component="h1" mb="20px">Login</Typography>
      <Button variant="contained" onClick={signInWithGoogle}>
        Sign in with google
      </Button>
    </Container>
  )
}

export default Login;