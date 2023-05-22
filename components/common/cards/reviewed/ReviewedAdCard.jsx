import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './reviwedjobcard.style'

const ReviewedAdCard = ({ad, handleNavigate}) => {
  console.log('REVIEWD AD CARD : ' + ad);
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source={{uri: ad.image}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      

      <View style={styles.textContainer}>
        <Text style={styles.adName} numberOfLines={1}>
          {ad.title}
        </Text>
        <Text style={styles.adOperator}>{ad.operateur}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ReviewedAdCard