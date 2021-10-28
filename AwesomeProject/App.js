import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={
          [{key: "tristan"}, {key: "maelyn"}, {key: "hanna"}, {key: "where the bitches at"}
          ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
