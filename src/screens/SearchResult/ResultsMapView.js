import React from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import MapView, {Marker} from 'react-native-maps';
import {PostCarouselItem} from '../../components/PostCarouselItem';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';

export const ResultsMapView = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = Dimensions.get('window').width;
  const flatList = useRef();
  const mapView = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = feed.findIndex(place => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index});
    const coordinate = feed[index].coordinate;
    coordinate.latitudeDelta = 0.8;
    coordinate.longitudeDelta = 0.8;
    mapView.current.animateToRegion(coordinate);
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={mapView}
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

      <View style={{position: 'absolute', bottom: 40}}>
        <FlatList
          data={feed}
          ref={flatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment="center"
          decelerationRate="fast"
          renderItem={({item}) => <PostCarouselItem id={item.id} post={item} />}
          onViewableItemsChanged={onViewChanged.current}
          viewabilityConfig={viewConfig.current}
        />
      </View>
    </View>
  );
};

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
