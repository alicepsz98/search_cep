import React from "react";
import * as Styled from "./styles";

export const CepResult = (props) => {
  return (
    <>
      {props.result.cep && (
        <Styled.CepResult>
          <h2>{props.result.cep}</h2>
          <span>{props.result.logradouro}</span>
          <span>Bairro: {props.result.bairro}</span>
          <span>{props.result.localidade} - {props.result.uf}</span>
          <span>DDD: 0{props.result.ddd}</span>
        </Styled.CepResult>
      )}
    </>
  );
};
