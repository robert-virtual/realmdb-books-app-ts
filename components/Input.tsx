import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const Input: React.FC<Props> = ({placeholder, onChangeText, value}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={style.input}
      value={value}
    />
  );
};
const style = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 10,
    width: '90%',
    marginVertical: 10,
  },
});
