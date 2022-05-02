import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [arduinoEffect, setArduinoEffect] = useState(0);

  const effects = ['Ping Pong', 'De a 4', 'De a 8', 'Prender Todos'];
  const backgroundColors = ['#fbd1d1', '#c6fff5', '#f2f99e', '#b5ffa2'];

  const handleBeforeClick = () => {
    if (arduinoEffect === 0) return setArduinoEffect(effects.length - 1);
    setArduinoEffect(arduinoEffect - 1);
  };

  const handleNextClick = () => {
    if (arduinoEffect === effects.length - 1) return setArduinoEffect(0);
    setArduinoEffect(arduinoEffect + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '20px',
        backgroundColor: backgroundColors[arduinoEffect],
      }}
    >
      <StatusBar backgroundColor="#000" style="light" />
      <Text style={styles.header}>Efectos de Arduino</Text>
      <View style={styles.main}>
        <View style={styles.buttonsContainer}>
          <Button color="#333" title="<" onPress={handleBeforeClick} />
          <Text style={styles.effectText}>{effects[arduinoEffect]}</Text>
          <Button color="#333" title=">" onPress={handleNextClick} />
        </View>
        <Button title="Aplicar efecto" />
      </View>
      <Text style={styles.footer}>Hecho por @salinatomass</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    color: '#333333',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  effectText: {
    width: 180,
    textAlign: 'center',
    fontSize: 24,
  },
  footer: {
    paddingBottom: 20,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    color: '#383838',
    fontSize: 16,
    fontWeight: '600',
  },
});
