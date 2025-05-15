import { ButtonAdicionar, ButtonPesquisar, ButtonSair, Container, ContainerTarefas, Header, ImputTarefa, InputPesquisa, Main, BarraPesquisaWrapper, BarraPesquisa, InputAdicionarContainer } from "./style";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useState, useEffect } from "react";

function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function getTarefas() {
      try {
        const { data } = await api.get('/tarefa', {
          headers: {
            Authorization:  `Bearer ${token}`
          }
        });
        setTarefas(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        alert("Erro ao buscar tarefas.");
      }
    }
    if (token) {
      getTarefas();
    }
  }, [token]);

  async function handleAdicionarTarefa() {
    if (novoTitulo.trim() && token) {
      try {
        const response = await api.post('/tarefa', { descricao: novoTitulo }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTarefas([...tarefas, response.data]);
        setNovoTitulo("");
      } catch (error) {
        console.error("Erro ao adicionar tarefa:", error);
        alert("Erro ao adicionar tarefa.");
      }
    } else if (!token) {
      alert("Você precisa estar logado para adicionar tarefas.");
    } else {
      alert("Por favor, digite um título para a tarefa.");
    }
  }

  async function handleExcluirTarefa(id) {
    if (token) {
      try {
        await api.delete(`/tarefa/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
      } catch (error) {
        console.error("Erro ao excluir tarefa:", error);
        alert("Erro ao excluir tarefa.");
      }
    } else {
      alert("Você precisa estar logado para excluir tarefas.");
    }
  }

  return (
    <Container>
      <Header>
        <BarraPesquisaWrapper>
          <BarraPesquisa>
            <InputPesquisa />
            <ButtonPesquisar>Pesquisar</ButtonPesquisar>
          </BarraPesquisa>
        </BarraPesquisaWrapper>
        <ButtonSair type="button" onClick={() => navigate('/')}>Sair</ButtonSair>
      </Header>
      <Main>
        <InputAdicionarContainer>
          <ImputTarefa
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
            placeholder="Digite o título da tarefa"
          />
          <ButtonAdicionar type="button" onClick={handleAdicionarTarefa}>
            Adicionar
          </ButtonAdicionar>
        </InputAdicionarContainer>
        <ContainerTarefas>
          {tarefas.map((tarefa) => (
            <div key={tarefa.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
              <div>
                <h3>{tarefa.titulo}</h3>
                <p>{tarefa.descricao}</p>
              </div>
              <button onClick={() => handleExcluirTarefa(tarefa.id)} style={{ backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}>
                Apagar
              </button>
            </div>
          ))}
        </ContainerTarefas>
      </Main>
    </Container>
  );
}

export default Home;