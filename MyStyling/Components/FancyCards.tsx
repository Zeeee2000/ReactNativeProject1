import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
      <Image source={{uri: 'https://www.expedia.com/stories/wp-content/uploads/2021/09/Tenerife-Canary-Islands.png'}} style={styles.cardImage}></Image>
      <Text style={styles.cardheading1}>Tenerife, Canary Islands</Text>
      <Text style={styles.cardText1}>Tenerife is the largest of Spain’s Canary Islands, off West Africa. It's dominated by Mt. Teide, a dormant volcano that is Spain's tallest peak. Tenerife may be best known for its Carnaval de Santa Cruz, a huge pre-Lent festival with parades, music, dancing and colorful costumes. The island has many beaches (with sands from yellow to black) and resort areas, including Los Cristianos and Playa de las Américas.</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width:365,
        height:500,
        borderRadius:16,
        marginVertical:15,
        marginHorizontal:14,
        backgroundColor: '#D3D3D3'
    },
    cardElevated:{},
    cardImage:{
        height:300,
        width:365,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
    },
    cardheading1:{
        fontSize:20,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 3,
        color:'#000000'
    },
    cardText1:{
        fontSize:15,
        paddingHorizontal: 10,
        color:'#000000',
        fontFamily:'Yatra-One',
    },
})