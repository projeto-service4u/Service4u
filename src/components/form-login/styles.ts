import styled from 'styled-components'

import { Cores } from '../../styles/cores'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${Cores.FUNDO};
  .container-logo {
    display: flex;
    align-items: stretch;
    height: 17vh;

    img {
      align-self: center;
      max-width: 70px;
      border-radius: 15px;
    }

    strong {
      margin: 12px;
      max-width: 140px;
      align-self: center;

      color: ${Cores.PRIMARIA_1};

      font-size: 25px;

      font-weight: bold;
      font-family: 'Poppins', sans-serif;
    }
  }

  .main-content {
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 320px;
    padding: 50px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    max-height: 100vh;
    align-items: center;
    text-align: center;

    form {
      button {
        width: 100%;
        margin-top: 16px;
      }
    }
  }
`
