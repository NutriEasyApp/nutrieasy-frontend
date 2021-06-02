import * as React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Container, Wrapper, Text, Title, Back, SafeAreaViewStyle } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TermosOfUse({ navigation }) {
  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <Back>
            <MaterialCommunityIcons
              name="arrow-left"
              size={30}
              color="#90cc0c"
              onPress={() => navigation.goBack()}
            />
          </Back>
          <Wrapper>
            <Title>Termos de Uso</Title>
            <Text style={{ marginBottom: 25 }}>
              1. Termos ao acessar ao aplicativo NutriEasy, concorda em cumprir estes termos de
              serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo
              cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses
              termos, está proibido de usar ou acessar este aplicativo. Os materiais contidos neste
              aplicativo são protegidos pelas leis de direitos autorais e marcas comerciais
              aplicáveis.
            </Text>
            <Text style={{ marginBottom: 25 }}>
              2. Uso de Licença é concedida permissão para baixar temporariamente uma cópia dos
              materiais (informações ou software) no aplicativo NutriEasy , apenas para visualização
              transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma
              transferência de título e, sob esta licença, você não pode:  modificar ou copiar os
              materiais;  usar os materiais para qualquer finalidade comercial ou para exibição
              pública (comercial ou não comercial);  tentar descompilar ou fazer engenharia reversa
              de qualquer software contido no aplicativo NutriEasy;  remover quaisquer direitos
              autorais ou outras notações de propriedade dos materiais; ou  transferir os materiais
              para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor. Esta licença
              será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
              rescindida por NutriEasy a qualquer momento. Ao encerrar a visualização desses
              materiais ou após o término desta licença, você deve apagar todos os materiais
              baixados em sua posse, seja em formato eletrónico ou impresso.
            </Text>
            <Text>
              3. Isenção de responsabilidade Os materiais no aplicativo da NutriEasy são fornecidos
              'como estão'. NutriEasy não oferece garantias, expressas ou implícitas, e, por este
              meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias
              implícitas ou condições de comercialização, adequação a um fim específico ou não
              violação de propriedade intelectual ou outra violação de direitos. Além disso, o
              NutriEasy não garante ou faz qualquer representação relativa à precisão, aos
              resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu aplicativo ou
              de outra forma relacionado a esses materiais ou em aplicativos vinculados a este
              aplicativo.
            </Text>
            <Text>
              4. Limitações Em nenhum caso o NutriEasy ou seus fornecedores serão responsáveis ​​por
              quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido
              a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais
              em NutriEasy, mesmo que NutriEasy ou um representante autorizado da NutriEasy tenha
              sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas
              jurisdições não permitem limitações em garantias implícitas, ou limitações de
              responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se
              aplicar a você.
            </Text>
            <Text style={{ marginBottom: 25 }}>
              5. Precisão dos materiais Os materiais exibidos no aplicativo da NutriEasy podem
              incluir erros técnicos, tipográficos ou fotográficos. NutriEasy não garante que
              qualquer material em seu aplicativo seja preciso, completo ou atual. NutriEasy pode
              fazer alterações nos materiais contidos em seu aplicativo a qualquer momento, sem
              aviso prévio. No entanto, NutriEasy não se compromete a atualizar os materiais.
            </Text>
            <Text>
              6. Links O NutriEasy não analisou todos os aplicativos vinculados ao seu aplicativo e
              não é responsável pelo conteúdo de nenhum aplicativo vinculado. A inclusão de qualquer
              link não implica endosso por NutriEasy do aplicativo. O uso de qualquer aplicativo
              vinculado é por conta e risco do usuário. Modificações O NutriEasy pode revisar estes
              termos de serviço do aplicativo a qualquer momento, sem aviso prévio. Ao usar este
              aplicativo, você concorda em ficar vinculado à versão atual desses termos de serviço.
              Lei aplicável Estes termos e condições são regidos e interpretados de acordo com as
              leis do NutriEasy e você se submete irrevogavelmente à jurisdição exclusiva dos
              tribunais naquele estado ou localidade.
            </Text>
          </Wrapper>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}