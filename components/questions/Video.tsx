import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import VideoPlayer, { type VideoPlayerRef } from 'react-native-video-player';

type VideoPlayerAppProps = {
  url: string,
};

const VideoPlayerApp = (props: VideoPlayerAppProps) => {
  // State to store video duration
  const [duration, setDuration] = useState(0);

  // Reference to the VideoPlayer component
  const videoRef = React.useRef<VideoPlayerRef>(null);
  
  // Reference to track current playback time
  const progressRef = React.useRef<number>(0);

  return (
    // Safe area container for proper layout on devices
    <SafeAreaView style={styles.container}>
      
      {/* VideoPlayer component with source and event handlers */}
      <VideoPlayer
        ref={videoRef} // Reference to access VideoPlayer methods
        source={{ uri: props.url }} // Video URL
        onError={(error) => console.error('Video Error:', error)} // Handle playback errors
        onLoad={(data) => {
          console.log('Video Loaded:', data); // Log load data
          setDuration(data?.duration); // Set video duration state
        }}
        onBuffer={(data) => console.log('Buffering:', data)} // Log buffering status
        onProgress={(data) => {
          console.log('Video Progress:', data); // Log progress data
          progressRef.current = data.currentTime; // Update current playback time
        }}
      >
      </VideoPlayer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow', // Set background color to yellow
  },
});

export default VideoPlayerApp;