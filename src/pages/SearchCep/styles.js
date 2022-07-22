import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#121212, #212b46);
  .title {
    font-size: 65px;
    color: #fff;
    animation: flipTitle 2s;
    @media (max-width: 620px) {
      font-size: 60px;
    }
    @media (max-width: 530px) {
      font-size: 45px;
    }
    @media (max-width: 400px) {
      font-size: 38px;
    }
  } 
  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }
`;

