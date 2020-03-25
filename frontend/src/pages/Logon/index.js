import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import * as S from './styles';
import * as FS from '../../styles/form';

import logoImg from '../../assets/images/logo.svg';
import heroesImg from '../../assets/images/heroes.png';

export default function Logon() {
  const [id, setId] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (err) {
      alert('falha no login, tente novamente');
    }
  }

  return (
    <S.Container>
      <S.WapperForm>
        <img src={logoImg} alt="Be the Hero" />
        <S.Form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>

          <FS.Input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <FS.ButtonRed type="submit">Entrar</FS.ButtonRed>

          <Link className="backLink" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </S.Form>
      </S.WapperForm>

      <img src={heroesImg} alt="Heroes" />
    </S.Container>
  );
}
