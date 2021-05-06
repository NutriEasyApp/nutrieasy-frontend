import React from 'react';
import { styles } from './style';
import { DataTable } from 'react-native-paper';

import { Text, View } from 'react-native';

export default function DietProposal() {
  return (
    <View style={styles.background}>
      <Text
        style={{
          fontSize: 27,
          fontWeight: '700',
          marginTop: 30,
          marginBottom: 15,
        }}
      >
        Proposta de Dieta
      </Text>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nº Dieta</DataTable.Title>
          <DataTable.Title numeric>Carboidratos</DataTable.Title>
          <DataTable.Title numeric>Proteínas</DataTable.Title>
          <DataTable.Title numeric>Lipídeos</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>

        {/*<DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
          console.log(page);
          }}
          label="1-2 of 6"
        />*/}
      </DataTable>
    </View>
  );
}
