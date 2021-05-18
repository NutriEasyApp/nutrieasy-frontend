import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import DietProposal from '../../components/DietProposal';

export default function Home() {
  return (
    <Container>
      <Header />
      <DietProposal />
    </Container>
  );
}
