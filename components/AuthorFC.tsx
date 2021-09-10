import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Author} from '../schema/schema';

interface Props {
  author: Author;
  id?: string;
}

export const AuthorFC: React.FC<Props> = ({author, id}) => {
  return (
    <View style={style.card}>
      <Text style={style.title}>{author.name}</Text>
      <Text style={style.sub}>{author.country}</Text>
      <Text>{author.createdAt?.toISOString()}</Text>
      <Text>{id}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    elevation: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
  sub: {
    fontSize: 15,
    color: 'gray',
  },
});
