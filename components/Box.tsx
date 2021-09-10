import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  styles?: any;
}

export const Box: React.FC<Props> = ({children, styles}) => {
  return <View style={{...style.box, ...styles}}>{children}</View>;
};
const style = StyleSheet.create({
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
});
