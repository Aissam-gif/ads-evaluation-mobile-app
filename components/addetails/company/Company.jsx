import {React, useState, useCallback, useEffect} from 'react'
import { View, Text, Image } from 'react-native'


import styles from './company.style'
import { icons } from '../../../constants'
import YouTube from 'react-native-youtube';

const Company = ({adImage, adTitle, operatorName, adDescription, adVideoLink, adDate, youtubeRef}) => {

  return (
    <View style={styles.container}>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{adTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.locationName}>{operatorName}</Text>
      </View>
      
        <YouTube
           ref={youtubeRef}
            apiKey="AIzaSyBOpv7FQZUq2PQ9xk88wCdHSS0b0_sLHiA"
            videoId="1DOdXyVFEgI" // The YouTube video ID
            play={true} // control playback of video with true/false
            loop // control whether the video should loop when ended
            onError={e => console.log(e)}
            style={{ alignSelf: 'stretch', height: 300}}
            /> 
      
    </View>
  )
}

export default Company