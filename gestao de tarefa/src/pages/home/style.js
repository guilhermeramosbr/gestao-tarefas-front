import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #f4f6f8;
 
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between; /* Distribui o espaço entre os filhos */
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 30px;
  background-color: #334756;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BarraPesquisaWrapper = styled.div`
  display: flex;
  justify-content: center; 
  flex-grow: 1;
`;

export const BarraPesquisa = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px; 
  width: 100%; 
`;

export const InputPesquisa = styled.input`
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px 0 0 6px;
  font-size: 16px;
  flex-grow: 1;
`;

export const ButtonPesquisar = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 0 6px 6px 0;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ButtonSair = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-left: 20px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  padding: 20px;
`;

export const InputAdicionarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const ImputTarefa = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px 0 0 6px;
  width: 100%;
  font-size: 16px;
`;

export const ButtonAdicionar = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 0 6px 6px 0;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-left: -5px;
`;

export const ContainerTarefas = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;