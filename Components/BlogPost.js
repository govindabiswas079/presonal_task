import React, { Fragment } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const BlogPost = ({ Title, SubTitle, ButtonTitle, DateTime, Paragraph, data, }) => {
  return (
    <Fragment>
      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 20, fontFamily: 'Nunito-ExtraBold', color: "#3a0b6c" }}>{Title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ fontSize: 20, fontFamily: 'Nunito-Medium', color: "#3a0b6c" }}>More</Text>
          <Feather name='chevron-right' color={'#3a0b6c'} size={22} />
        </View>
      </View>
      <View style={{ paddingBottom: 20, marginTop: 20 }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {data?.map((value, index) => (
            <View key={index} style={{ width: 340, backgroundColor: '#ffffff', borderRadius: 15, marginLeft: 15, marginRight: data?.length - 1 === index ? 20 : 0 }}>
              <View style={{ width: 340, height: 200, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden', }}>
                <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
              </View>
              <View style={{ padding: 15 }}>
                <Text numberOfLines={1} style={{ fontSize: 18, fontFamily: 'Nunito-ExtraBold', color: "#000000" }}>{SubTitle}</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text numberOfLines={7} style={{ fontSize: 18, fontFamily: 'Nunito-Bold', color: "#6a6a6a" }}>{Paragraph}</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text numberOfLines={1} style={{ fontSize: 18, fontFamily: 'Nunito-ExtraBold', color: "#310093" }}>{ButtonTitle}</Text>
              </View>
              <View style={{ height: 2, backgroundColor: '#e4e4e4' }} />
              <View style={{ padding: 15 }}>
                <Text numberOfLines={1} style={{ fontSize: 18, fontFamily: 'Nunito-ExtraBold', color: "#6a6a6a" }}>{DateTime}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default BlogPost