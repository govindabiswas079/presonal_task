import React, { Fragment } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const WishdomWord = ({ Title, data }) => {

  return (
    <Fragment>
      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 20, fontFamily: 'Nunito-ExtraBold', color: "#3a0b6c" }}>{Title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ fontSize: 20, fontFamily: 'Nunito-Medium', color: "#3a0b6c" }}>More</Text>
          <Feather name='chevron-right' color={'#3a0b6c'} size={22} />
        </View>
      </View>
      <View style={{ paddingBottom: 20, marginTop: 30 }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {data?.map((value, index) => (
            <View key={index} style={{ width: 330, height: 330, marginLeft: 20, marginRight: data?.length - 1 === index ? 20 : 0 }}>
              <View style={{ width: 330, height: 330, borderRadius: 20, overflow: 'hidden', }}>
                <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default WishdomWord