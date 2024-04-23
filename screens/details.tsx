import { RouteProp, useRoute } from '@react-navigation/native';
import { ScreenContent } from 'components/ScreenContent';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../navigation';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details() {
  const router = useRoute<DetailsSreenRouteProp>();

  return (
    <View style={styles.container}>
      <Text>{router.params.pokeDetails.name}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
