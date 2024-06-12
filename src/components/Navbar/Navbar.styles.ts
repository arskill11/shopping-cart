import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  position: fixed;
  top: 0;
  z-index: 1;

  h1 {
    font-size: 30px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  a {
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 10px;
  }

  a:hover {
    background: lightgray;
  }

  a.active {
    font-weight: bold;
    font-size: 1.7rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: min-content;

  p.cartCount {
    width: 30px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: darkred;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoContainer = styled(ButtonContainer)`
  gap: 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: lightgray;
  }

  .cartButton {
    font-size: 1.7rem;
    cursor: pointer;

`;