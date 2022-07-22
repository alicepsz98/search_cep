import styled from "styled-components";

export const CepResult = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 500px;
  border-radius: 8px;
  animation: flipMain 1.5s;
  h2 {
    margin: 16px 0;
    font-size: 32px;
    @media (max-width: 620px) {
      font-size: 27px;
    }
  }
  span {
    margin-bottom: 16px;
    font-weight: bold;
  }
  @media (max-width: 620px) {
    width: 85%;
  }
  @media (max-width: 530px) {
    width: 90%;
  }
  @keyframes flipMain {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }
`;