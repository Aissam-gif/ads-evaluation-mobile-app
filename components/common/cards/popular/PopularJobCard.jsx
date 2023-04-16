import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectAd, handleCardPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectAd, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectAd, item)}>
        <Image 
          source={{uri: item.image_url}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      
      <Text style={styles.companyName} numberOfLines={1}>
        {item.operator}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectAd, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.location}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard