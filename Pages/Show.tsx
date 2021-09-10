import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AuthorFC} from '../components/AuthorFC';
import {Box} from '../components/Box';
import {MainPages} from '../Routes/types';
import {Author, realmDB} from '../schema/schema';

interface Props {
  navigation: BottomTabNavigationProp<MainPages, keyof MainPages>;
  route: any;
}

export const Show: React.FC<Props> = ({route}) => {
  const [authors, setAuthors] = useState(realmDB.objects<Author>('Author'));
  useEffect(() => {
    refresh();
  }, [route]);
  const refresh = () => {
    setAuthors(realmDB.objects<Author>('Author'));
  };
  if (authors.length === 0) {
    return (
      <Box>
        <Text>Aun no hay Autores</Text>
      </Box>
    );
  }
  return (
    <Box>
      <FlatList
        contentContainerStyle={style.list}
        data={Array.from(authors).reverse()}
        renderItem={({item}) => (
          <AuthorFC
            id={item._objectId()}
            key={item._objectId()}
            author={item}
          />
        )}
      />
      <View style={style.btns} />
    </Box>
  );
};

const style = StyleSheet.create({
  list: {
    width: '100%',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
});
