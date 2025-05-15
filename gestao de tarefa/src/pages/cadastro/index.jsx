import { Title, Container, Form, ImputLabel, Input, Button, JaSouCadastrado } from "./style";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useRef } from "react";

function Cadastro() {
  const inputNome = useRef();
  const inputEmail = useRef();
  const inputSenha = useRef();
  const inputConfirmarEmail = useRef();
  const inputConfirmarSenha = useRef();
  
  const navigate = useNavigate();

  async function cadastrarUsuario() {
    if (inputEmail.current.value === inputConfirmarEmail.current.value && inputSenha.current.value === inputConfirmarSenha.current.value) {
      try {
        const response = await api.post('/usuario', {
          nome: inputNome.current.value,
          email: inputEmail.current.value,
          senha: inputSenha.current.value,
        });
        if (response.status === 201) {
          alert('Usuário cadastrado com sucesso!');
          return true;
        } else {
          alert('Erro ao cadastrar usuário.');
          return false;
        }
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Ocorreu um erro ao cadastrar o usuário.');
        return false;
      }
    } else {
      alert('Os campos de email e senha devem ser iguais');
      return false; 
    }
  }

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form>
        <div>
          <ImputLabel>
            Nome <span>*</span>
          </ImputLabel>
          <Input type="text" placeholder='Nome do Usuario' ref={inputNome} />
        </div>
        <div>
          <ImputLabel>
            Email <span>*</span>
          </ImputLabel>
          <Input type="text" placeholder='Digite seu Email' ref={inputEmail} />
        </div>
        <div>
          <ImputLabel>
            Confirme seu Email <span>*</span>
          </ImputLabel>
          <Input type="text" placeholder='Confirme seu Email' ref={inputConfirmarEmail} />
        </div>
        <div>
          <ImputLabel>
            Senha <span>*</span>
          </ImputLabel>
          <Input type="password" placeholder='Digite sua senha' ref={inputSenha} />
        </div>
        <div>
          <ImputLabel>
            Confirme sua Senha <span>*</span>
          </ImputLabel>
          <Input type="password" placeholder='Confirme sua senha' ref={inputConfirmarSenha} />
        </div>
        <JaSouCadastrado type="button" onClick={() => navigate('/')} > Ja sou cadastrado</JaSouCadastrado>

        <Button type="button" onClick={async () => {
          const cadastroSucesso = await cadastrarUsuario();
          if (cadastroSucesso) {
            navigate('/');
          }
        }}>Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default Cadastro;