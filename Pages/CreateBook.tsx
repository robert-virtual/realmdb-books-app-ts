import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Box} from '../components/Box';
import {Input} from '../components/Input';

interface Props {}

export const CreateBook: React.FC<Props> = () => {
  return (
    <Box>
      <Text>Crear Libro</Text>
      <Input placeholder="Nombre" />
      <Input placeholder="Paginas" />
      <Input placeholder="Author" />
      <TouchableOpacity style={style.btn}>
        <Text style={style.btnText}>Guardar</Text>
      </TouchableOpacity>
    </Box>
  );
};

const style = StyleSheet.create({
  btn: {
    backgroundColor: '#0984e3',
    padding: 10,
    minWidth: 100,
    marginVertical: 10,
    elevation: 1,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
