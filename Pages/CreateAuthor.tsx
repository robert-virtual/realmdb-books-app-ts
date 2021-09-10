import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Box} from '../components/Box';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Input} from '../components/Input';
import {Author, realmDB} from '../schema/schema';
import {MainPages} from '../Routes/types';
const {random} = Math;
interface Props {
  navigation: BottomTabNavigationProp<MainPages, keyof MainPages>;
}

export const CreateAuthor: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [saved, setSaved] = useState(false);
  const saveAuthor = () => {
    // Alert.alert('Datos', `Name: ${name} Country:${country}`);
    realmDB.write(() => {
      realmDB.create<Author>('Author', {name, country});
      setSaved(true);
    });
    navigation.navigate('Show', {refresh: random()});
  };

  return (
    <Box styles={style.box}>
      <Text>Crear Author</Text>
      <Input placeholder="Nombre" onChangeText={setName} value={name} />
      <Input placeholder="Pais" onChangeText={setCountry} value={country} />
      <View style={style.btns}>
        <Button title="Guardar" onPress={saveAuthor} />
        {/* <Button title="Volver" onPress={() => navigation.navigate('Show')} /> */}
      </View>
      {saved && <Text>Author Saved!!</Text>}
    </Box>
  );
};

const style = StyleSheet.create({
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  box: {
    alignItems: 'center',
  },
});
