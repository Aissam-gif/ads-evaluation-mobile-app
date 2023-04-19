import {React, useState, useCallback} from 'react'
import { View, Text, Image } from 'react-native'


import styles from './company.style'
import { icons } from '../../../constants'
import YouTube from 'react-native-youtube';

const Company = ({adImage, adTitle, operatorName, adDescription, adVideoLink, adDate}) => {



  return (
    <View style={styles.container}>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{adTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.locationName}>{operatorName}</Text>
      </View>
      
      <View style={styles.logoBox}>
      <YouTube
          key="AIzaSyBOpv7FQZUq2PQ9xk88wCdHSS0b0_sLHiA"
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
            
          style={{ alignSelf: 'stretch', height: 300 }}
          />
      </View>
      
    </View>
  )
}

export default Company