import React, {useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularads.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularAdCard'

import useFetch from '../../../hook/useFetch'

const PopularAds = () => {
  const router = useRouter()
  
  const {data, isLoading, error} = useFetch('fbf3f6d1-c324-4ec0-9b23-746a8bfb34bf', {

  })
  const [selectedAd, setSelectedAd] = useState();
  const handleCardPress = (item) => {
    router.push(`/ad-details/${item.ad_id}`);
    setSelectedAd(item.ad_id)
  }

  // console.log(data)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular Ads</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary}/>
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList 
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard
                selectedAd={selectedAd}
                item = {item}
                handleCardPress={handleCardPress}
                />
          )}
              keyExtractor={item => item?.ad_id}
              contentContainerStyle={{columnGap: SIZES.medium}}
              horizontal
            />
          )}
        </View>
    </View>
  )
}

export default PopularAds