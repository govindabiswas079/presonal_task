import React from 'react'
import { View, Text } from 'react-native'
import { Fragment } from 'react'
import { Pressable } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const MeditationChallange = () => {

  return (
    <Fragment>
      <View style={{ marginTop: 50 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-ExtraBold', textTransform: 'uppercase', color: "#4a2078" }}>Meditation Challange</Text>
      </View>
      <View style={{ marginTop: 30, backgroundColor: '#6913c3', marginHorizontal: 15, borderRadius: 20 }}>

        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={{ fontSize: 20, fontFamily: 'Nunito-ExtraBold', color: "#FFFFFF", paddingRight: 10 }}>Start with ONE</Text>
            <FontAwesome5 name='hand-point-down' color={'#f1c40f'} size={30} />
          </View>
        </View>

        <View style={{ marginHorizontal: 30 }}>
          {data?.map((value, index) => (
            <Pressable key={index} style={{ marginTop: 20, borderColor: value?.color, borderWidth: 2, borderStyle: 'solid', borderRadius: 10, height: 55, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: value?.color, fontFamily: 'OpenSans-Bold', fontSize: 18 }}>{value?.name}</Text>
            </Pressable>
          ))}

          <View style={{ marginTop: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ fontSize: 18, fontFamily: 'Nunito-ExtraBold', color: "#FFFFFF" }}>See More</Text>
              <Feather name='chevron-right' color={'#FFFFFF'} size={25} />
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default MeditationChallange;



const data = [
  { id: 1, name: 'Overcoming Grief', color: '#ffffff' },
  { id: 2, name: 'Karmic clensing', color: '#53d734' },
  { id: 3, name: 'Reduced Anxiety', color: '#ffa4b6' },
  { id: 4, name: 'Total Mindfulness', color: '#2bc1e0' },
]