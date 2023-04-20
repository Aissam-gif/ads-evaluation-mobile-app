import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { Audio } from 'expo-av';


import styles from './review.style'
import { getDurationFormatted } from '../../../utils';
import {icons, SIZES} from '../../../constants'

const Review = ({}) => {
  const [recording, setRecording] = React.useState();
  const [userRecording, setUserRecording] = useState(undefined);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
     
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
    
      setRecording(recording);
  
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    let updatedRecording = {
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    };
    setUserRecording(updatedRecording)
    console.log('Recording stopped and stored at', updatedRecording.file);
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.recordBtn} 
         onPress={recording ? stopRecording : startRecording}>
          <Image 
            source={icons.mic}
            resizeMode='contain'
            style={styles.recordBtnImage}
          />
        </TouchableOpacity>
      
        <Text style={styles.recordMessage}>{recording ? 'Stop Recording' : 'Review Ad'}</Text>

        {userRecording === undefined ? (<></>) : (
         <View style={styles.container}>
             <Text>My Recording : </Text>
              <View style={{flex:1, flexDirection:"row"}}>
                <Text>Record - {userRecording.duration}</Text>
                <Button style={styles.button} onPress={
                  () => userRecording.sound.replayAsync()} title="Play"></Button>
              </View>
         </View>
        )}
   
  </View>
  )
}

export default Review