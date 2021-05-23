import * as React from 'react';
import { Image, TextInput, TouchableHighlight, View } from 'react-native';
import { Container, Button, Title, Text, TextButton, Wrapper } from './style';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import img from '../../assets/images/reports-img300.png';

/*
 * Gerar String HTML.
 */
//const generateHTML = value =>
  /*`<div>
  <span>Hi ${value}, how are you?
  </span>
  </div>`;*/
//const html = generateHTML(this.state.value);

const html =`<div><span>Hi how are you?</span></div>`;

/*
 * Criar PDF e Conversão do HTML para o PDF.
 */
const options = {
  html,
  fileName: 'NomeDoArquivo',
  directory: 'DiretorioDoArquivo',
};
const file = async function convertOptions(){
  await RNHTMLtoPDF.convert(options)
};

/*
 * Exibir o PDF na tela.
 */
const pdfSource = { uri: file.filePath };

export default function Reports() {
  return (
    <Container>
      <Wrapper>
        <Image source={img}></Image>
        <Title>Relatórios</Title>
        <Text>Gráficos e Refeições</Text>
        {/*<TextInput
          onChangeText={text =>
            this.setState({
              value: text,
            })
          }
          value={this.state.value}
        />
        
        <Pdf source={pdfSource} /> 
        */}
      </Wrapper>


      <Wrapper>
        <Button>
          <TextButton>Gerar Relatório</TextButton>
        </Button>
      </Wrapper>
    </Container>
  );
}
