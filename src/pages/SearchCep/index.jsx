import React, { useState } from "react";
import * as Styled from "./styles";
import api from "../../services/api";
import { SearchCepInput } from "../../components/SearchCepInput";
import { CepResult } from "../../components/CepResult";

const SearchCep = () => {
  const [cep, setCep] = useState("");
  const [cepResult, setCepResult] = useState({});
  const handleSearch = async () => {
    if (cep === "") {
      alert("Preencha o campo com algum CEP");
      return;
    } else {
      try {
        const res = await api.get(`${cep}/json`);
        setCepResult(res.data);
        setCep("");
      } catch {
        alert("Ops, ocorreu um erro. Tente novamente!");
      }
    }
  };
  return (
    <Styled.Container>
      <h1 className="title">Buscador de CEP</h1>
      <SearchCepInput
        cepValue={cep}
        setCepValue={setCep}
        onClick={handleSearch}
      />
      <CepResult result={cepResult} />
    </Styled.Container>
  );
};

export default SearchCep;
