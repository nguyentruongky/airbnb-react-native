import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const GradientBackground = () => (
  <LinearGradient
    start={{x: 1, y: 0}}
    end={{x: 0, y: 1}}
    colors={['#9dbcfb', '#203f86']}
    style={{
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    }}></LinearGradient>
);
