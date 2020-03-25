import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';

import api from '../../services/api';

import * as S from './styles';
import * as FS from '../../styles/form';
import logoImg from '../../assets/images/logo.svg';

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [whatsapp, setWhatsapp] = useState();
  const [city, setCity] = useState();
  const [uf, setUf] = useState();

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`);
    }
  }

  return (
    <S.Wrapper>
      <S.Container>
        <section>
          <img src={logoImg} alt="" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a
            encontraremos casos da sua ONG
          </p>

          <Link className="backLink" to="/">
            <FiArrowDownLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <S.Form onSubmit={handleRegister}>
          <FS.Input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <FS.Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <FS.Input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <FS.InputGroup>
            <FS.Input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <FS.Input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </FS.InputGroup>

          <FS.ButtonRed type="submit">Cadastrar</FS.ButtonRed>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
