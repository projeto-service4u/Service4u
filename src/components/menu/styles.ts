import styled from 'styled-components'

import { Cores } from '../../assets/styles/cores'
export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
`
export const Logo = styled.div`
  align-items: center;
  display: flex;
  font-size: x-large;
  font-weight: 700;
  padding: 15px;
  img {
    width: 55px;
    height: 55px;
    filter: brightness(0) invert(1);
  }
`

export const MenuLink = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  /* margin: 10px auto; */
  justify-content: end;
  .link-menu,
  button {
    transition: filter 0.2s;
    text-decoration: none;
    font-weight: 500;
    padding: 10px;
    &:not(:disabled):hover {
      filter: brightness(0.8);
      color: ${Cores.CINZA_2};
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
  .logout {
    background: transparent;
    color: white;
    border: none;
  }
`
