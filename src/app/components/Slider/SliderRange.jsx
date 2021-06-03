import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export function SliderRange({
  data,
  unitType,
  onChange,
  step,
  minimumValue,
  maximumValue,
}) {
  const handleChange = event => {
    onChange(event);
  };
  function checkTitle() {
    switch (unitType) {
      case 'kg':
        return <Text style={styles.text}>{String(data)}kg</Text>;
      case 'cm':
        return <Text style={styles.text}>{String(data)}cm</Text>;
      case 'h':
        return <Text style={styles.text}>{String(data)}h</Text>;
      case 'qtd':
        return <Text style={styles.text}>{String(data)}</Text>;
    }
  }

  return (
    <View style={styles.container}>
      {checkTitle()}
      <Slider
        step={step}
        maximumValue={maximumValue}
        minimumValue={minimumValue ? minimumValue : 2}
        onValueChange={value => handleChange(value)}
        value={Number(data)}
        minimumTrackTintColor="#2C632D"
        maximumTrackTintColor="#000000"
        thumbTintColor="#2C632D"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
