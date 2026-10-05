import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.phone}>
        <ProductScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  phone: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
  },
});

export default App;