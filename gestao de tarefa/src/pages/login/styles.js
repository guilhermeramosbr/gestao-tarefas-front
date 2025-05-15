import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 12px 20px;

  div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 15px;
    }
`;
export const ImputLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;

  span {
        color: red;
    }
`;
export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const Cadastrar = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background-color: #218838;
  }
`;  

