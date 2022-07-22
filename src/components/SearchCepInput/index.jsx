import React from "react";
import * as Styled from "./styles";
import { FiSearch } from "react-icons/fi";

export const SearchCepInput = (props) => {
  return (
    <Styled.SearchCepInput>
      <input 
        value={props.cepValue}
        onChange={(e) => props.setCepValue(e.target.value)}
        placeholder="Digite aqui seu CEP..." 
      />
      <button className="buttonSearch" onClick={props.onClick}>
        <FiSearch size={25} color="#fff" />
      </button>
    </Styled.SearchCepInput>
  );
};
