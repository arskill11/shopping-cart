import styled from 'styled-components';

export const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 100px 0;
  min-height: 70vh;
  align-items: center;

  div.goods {
    padding: 0 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }

  a {
    width: 15%;
    height: 90%;
    text-decoration: none;
    color: black;
  }
`;
