import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './reviewedads.style'
import {COLORS} from '../../../constants'
import ReviewedAdCard from '../../common/cards/reviewed/ReviewedAdCard';

import useFetch from '../../../hook/useFetch'

const ReviewedAds = () => {
  const router = useRouter()
  
  const {data, isLoading, error} = useFetch('fbf3f6d1-c324-4ec0-9b23-746a8bfb34bf', {

  })
  console.log(data)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Recently Reviewed Ads</Text>
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
           data?.map((ad) => (
            <ReviewedAdCard 
              ad={ad}
              key={`recently-review-ad-${ad?.ad_id}`}
              handleNavigate={() => router.push(`/ad-details/${ad.ad_id}`)}
            />
           ))
          )}
        </View>
    </View>
  )
}

export default ReviewedAds