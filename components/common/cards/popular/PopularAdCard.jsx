import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularadcard.style'

const PopularAdCard = ({item, selectedAd, handleCardPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectedAd, item)}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.companyAndLogoContainer}>
        <TouchableOpacity style={styles.logoContainer(selectedAd, item)}>
          <Image 
            source={{uri: item.image_url}}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </TouchableOpacity>
        
        <Text style={styles.companyName} numberOfLines={1}>
          {item.operator}
        </Text>
      </View>
    

      <View style={styles.infoContainer}>
        <Text style={styles.adTitle(selectedAd, item)} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularAdCard