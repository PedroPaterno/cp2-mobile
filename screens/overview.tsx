import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Image, ActivityIndicator } from 'react-native';
import { RootStackParamList } from 'navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

const Overview = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon'
        );
        const json = await response.json();
        setPokemons(json.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
    data={pokemons}
    //keyExtractor={(item) => item.results.toString()}
    renderItem={({item }) => (
      <TouchableOpacity
        style={styles.pokeContainer}
        onPress={() => navigation.navigate('Details', {pokeDetails: item})}>
        <Text style={styles.url}>{item.url}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    )}
    />
  );
};

export default Overview;

const styles = StyleSheet.create({
  pokeContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#861414',
  },
  url: {
    fontSize: 14,
    color: '#666',
  },
});
