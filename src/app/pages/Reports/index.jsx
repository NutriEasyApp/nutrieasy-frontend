import React, { Component } from 'react';
import { Image, TextInput } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as Print from 'expo-print';

import { Container, Button, Title, Text, TextButton, Wrapper } from './style';
import img from '../../assets/images/reports-img300.png';
export default class Reports extends Component {

  async createPDF() {
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };

    try {
      let file = await RNHTMLtoPDF.convert(options);
      console.log('Success', file);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Image source={img}></Image>
          <Title>Relatórios</Title>
          <Text>Gráficos e Refeições</Text>
          {/*<TextInput
          onChangeText={value => setValue(value)}
          placeholder="useless placeholder"
        />
         <TextInput
            onChangeText={convertOptions()}
            placeholder="useless placeholder"
          />
        */}

          {/*
        <Pdf source={pdfSource} /> 
        */}
        </Wrapper>

        <Wrapper>
          <Button onPress={this.createPDF}>
            <TextButton>Gerar Relatório</TextButton>
          </Button>
        </Wrapper>
      </Container>
    );
  }
}
