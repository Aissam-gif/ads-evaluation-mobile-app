import React, {useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularads.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularAdCard'

import useFetch from '../../../hook/useFetch'

const PopularAds = () => {
  const router = useRouter()
  
  const {data, isLoading, error} = useFetch('e36de334-dff3-40d0-afdc-d0ee293b1fae', {

  })
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
                selectAd={null}
                item = {item}
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