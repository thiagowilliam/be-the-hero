import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  button {
    height: 68px;
    width: 68px;
    border-radius: 4px;
    border: 1px solid #dedce6;
    background: transparent;
    margin-left: 16px;
    transition: all 0.2s;

    &:hover {
      border-color: #999;
    }
  }

  a {
    width: 268px;
    height: 60px;
    background: #eb2b41;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 0;
    margin-left: auto;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: all 0.2s;
    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const TitleCadastro = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;
export const ListCasos = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;
export const ItemListCasos = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
    font-weight: 700;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
    & + strong {
      margin-top: 32px;
    }
  }
`;
