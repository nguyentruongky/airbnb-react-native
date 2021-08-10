import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <Row
          title="Adults"
          description="Ages 13 or above"
          value={adults}
          setValue={setAdults}
        />
        <Row
          title="Children"
          description="Ages 2 to 12"
          value={children}
          setValue={setChildren}
        />
        <Row
          title="Infants"
          description="Ages under 2"
          value={infants}
          setValue={setInfants}
        />
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResultsScreen',
            },
          })
        }
        style={{
          marginBottom: 32,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          borderRadius: 8,
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;

const Row = ({title, description, value, setValue}) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
        <Text style={{color: '#8d8d8d'}}>{description}</Text>
      </View>

      {/* -/+ buttons */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          onPress={() => setValue(Math.max(0, value))}
          style={styles.button}>
          <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
        </Pressable>

        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 16,
            width: 24,
            textAlign: 'center',
          }}>
          {value}
        </Text>

        <Pressable onPress={() => setValue(value + 1)} style={styles.button}>
          <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};
