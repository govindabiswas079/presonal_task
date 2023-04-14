import React, { Fragment } from 'react'
import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

const MeditationsCourses = ({ Title, SubTitle, Paragraph, data }) => {

    return (
        <Fragment>
            <View style={{ marginTop: 25, marginLeft: 15, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: '#3a0b6c', overflow: 'hidden' }}>
                <View style={{ paddingBottom: 20, }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {data?.map((value, index) => (
                            <View key={index} style={{ width: 320, marginTop: 20, marginBottom:  20, marginLeft: 20, }}>
                                <View style={{ width: '100%', height: 185, borderWidth: 1, borderColor: '#FFFFFF', borderStyle: 'solid', borderRadius: 20, overflow: 'hidden', }}>
                                    <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                    <View style={{}}>
                                        <Text style={{ color: '#e3c785', fontSize: 18, fontFamily: "Nunito-Medium" }}>{Title}</Text>
                                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: "Nunito-Bold" }}>{SubTitle}</Text>
                                    </View>
                                    <Pressable style={{ backgroundColor: '#e3c785', borderRadius: 50, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                                        <AntDesign name='playcircleo' color={'#FFFFFF'} size={25} />
                                    </Pressable>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: "Nunito-Medium" }}>{Paragraph}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Fragment>
    )
}

export default MeditationsCourses