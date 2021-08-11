import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import feed from '../../../assets/data/feed';
import MapView, {Marker} from 'react-native-maps';
import {useState} from 'react';

const SearchResultScreen = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {feed.map(item => (
          <CustomMarker
            id={item.id}
            isSelected={item.id === selectedPlaceId}
            coordinate={item.coordinate}
            price={item.newPrice}
            onPress={() => setSelectedPlaceId(item.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultScreen;

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 16,
          borderColor: 'grey',
          borderWidth: 1,
        }}>
        <Text
          style={{fontWeight: 'bold', color: isSelected ? 'white' : 'black'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};
