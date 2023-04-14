import React, { Fragment } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

const UpcommingEvents = ({ banners }) => {
  return (
    <Fragment>
      <View style={{ marginTop: 50 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-ExtraBold', color: "#4a2078" }}>Upcomming EVENTS</Text>
      </View>
      <View style={{ paddingBottom: 20, marginTop: 30 }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {banners?.map((value, index) => (
            <View key={index} style={{ width: 330, height: 330, marginLeft: 20, marginRight: banners?.length - 1 === index ? 20 : 0 }}>
              <View style={{ width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden', }}>
                <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default UpcommingEvents