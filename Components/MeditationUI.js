import React, { Fragment } from 'react'
import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

const MeditationUI = ({ Title, SubTitle, ButtonTitle, idVerify, data }) => {
  return (
    <Fragment>
      <View style={{ marginTop: 25, marginLeft: 15, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: '#3a0b6c', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ padding: 15 }}>
            <Text style={{ color: '#e3c785', fontSize: 18, fontFamily: "Nunito-Medium" }}>{Title}</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: "Nunito-Bold" }}>{SubTitle}</Text>
          </View>
          <Pressable style={{ backgroundColor: '#e3c785', borderRadius: 50, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            <AntDesign name='playcircleo' color={'#FFFFFF'} size={25} />
          </Pressable>
        </View>


        <View style={{ marginTop: 20, paddingBottom: 20 }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {data?.map((value, index) => (
              <View key={index} style={{ width: 140, height: 185, borderWidth: 1, borderColor: '#FFFFFF', borderStyle: 'solid', borderRadius: 20, overflow: 'hidden', marginLeft: 10, marginRight: data?.length - 1 === index ? 20 : 0 }}>
                <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15 }}>
            <Feather name='video' color={'#3a0b6c'} size={15} />
            <Text style={{ color: '#3a0b6c', fontSize: 14, fontFamily: "Nunito-Medium" }}> {ButtonTitle}</Text>
          </View>
          <Pressable style={{ borderRadius: 50, width: 35, height: 35, borderWidth: 1, borderColor: '#FFFFFF', borderStyle: 'solid', justifyContent: 'center', alignItems: 'center' }}>
            {idVerify ?
              <AntDesign name='checkcircle' color={'#179b56'} size={30} />
              :
              <Fontisto name='locked' color={'#f1c40f'} size={20} />
            }
          </Pressable>
        </View>
      </View>
    </Fragment>
  )
}

export default MeditationUI