import React from "react";
import { FiSearch } from "react-icons/fi";
import * as Styled from "./styles";

const SearchCep = () => {
  return (
    <Styled.Container>
      <h1 className="title">Buscador de CEP</h1>
      <Styled.SearchCepInput>
        <input type="text" placeholder="Digite aqui seu CEP..." />
        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </Styled.SearchCepInput>
      <Styled.CepResult>
        <h2>CEP: 23013440</h2>
        <span>Rua teste alguma coisa</span>
        <span>Complemento: qualquer cosia</span>
        <span>Um bairro qualquer</span>
        <span>Rio de Janeiro - RJ</span>
      </Styled.CepResult>
    </Styled.Container>
  );
};

export default SearchCep;
