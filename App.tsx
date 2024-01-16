import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>🎬 VisionOS Example for React Native Video ⚛</Text>
      <Video
        source={{
          uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
          title: 'Sintel',
          subtitle: 'Example Video',
          description: 'Example Video to test VisionOS video player',
          customImageUri:
            'https://bitdash-a.akamaihd.net/content/sintel/poster.png',
        }}
        style={s.video}
        controls={true}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default App;

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '90%',
    height: '70%',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
