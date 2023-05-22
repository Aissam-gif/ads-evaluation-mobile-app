import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './reviewedads.style'
import {COLORS} from '../../../constants'
import ReviewedAdCard from '../../common/cards/reviewed/ReviewedAdCard';

import useFetch from '../../../hook/useFetch'

const ReviewedAds = () => {
  const router = useRouter()
  
  const {data, isLoading, error} = useFetch('User/Reviwed/1', {})
  console.log('REVIEWED ADS : ', data)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Recently Reviewed Ads</Text>
          <TouchableOpacity onPress={() => {
            router.push('/view-more/reviewed/moreReviewedAds')
          }}>
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
              key={`recently-review-ad-${ad?.id}`}
              handleNavigate={() => router.push(`/ad-details/${ad.id}`)}
            />
           ))
          )}
        </View>
    </View>
  )
}

export default ReviewedAds