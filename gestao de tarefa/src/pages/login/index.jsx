import { Container, Title, Form, ImputLabel, Input, Button, Cadastrar } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useRef } from "react";

function Login() {
  const inputEmail = useRef();
  const inputSenha = useRef();
  const navigate = useNavigate();

  async function logarUsuario() {
    try {
      const response = await api.post('/login', {
        email: inputEmail.current.value,
        senha: inputSenha.current.value,
      });
      if (response.status === 201 && response.data.token) { 
        localStorage.setItem('token', response.data.token); 
        alert('Login realizado com sucesso!');
        return true;
      } else {
        alert('Erro ao realizar login. Verifique suas credenciais.');
        return false;
      }
    } catch (error) {
      console.error('Erro ao logar:', error);
      alert('Ocorreu um erro ao realizar o login.');
      return false;
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <div>
          <ImputLabel>
            Email<span>*</span>
          </ImputLabel>
          <Input type="email" placeholder="Digite seu Email" ref={inputEmail} />
        </div>
        <div>
          <ImputLabel>
            Senha <span>*</span>
          </ImputLabel>
          <Input type="password" placeholder="Digite sua Senha" ref={inputSenha} />
        </div>
        <Cadastrar type="button" onClick={() => navigate('/cadastro')} >Cadastre-se</Cadastrar>
        <Button type="button" onClick={async () => {
          const logarSucesso = await logarUsuario();
          if (logarSucesso) {
            navigate('/Home');
          }
        }}>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;