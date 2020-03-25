import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import * as S from './styles';
import * as FS from '../../styles/form';
import logoImg from '../../assets/images/logo.svg';

export default function NewIncident() {
  return (
    <S.Wrapper>
      <S.Container>
        <section>
          <img src={logoImg} alt="" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>

          <Link className="backLink" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <S.Form>
          <FS.Input type="text" placeholder="Título do caso" />
          <FS.TextArea placeholder="Descrição" />
          <FS.Input type="text" placeholder="Valor em reais" />

          <FS.ButtonRed type="submit">Cadastrar</FS.ButtonRed>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
