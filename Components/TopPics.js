/* import React from 'react'
import { Image, Pressable, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { NeurogonivityImage, } from '../assets/images'

const TopPics = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ backgroundColor: '#cdccc4', height: 120, width: '7%', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
        <Feather name='chevron-left' color={'#3a0b6c'} size={30} />
      </View>

      <View style={{ backgroundColor: '#e1e6ed', padding: 10, borderRadius: 20, width: '80%', elevation: 6 }}>
        <Text style={{ paddingBottom: 10, textAlign: 'center', color: '#191b6c', fontSize: 20, fontFamily: 'Nunito-ExtraBold' }}>Today's Top Pick</Text>

        <View style={{ backgroundColor: '#191b6c', borderRadius: 20, height: 400, width: '100%', overflow: 'hidden' }}>
          <Image source={NeurogonivityImage} resizeMode='stretch' style={{ height: '100%', width: '100%' }} />


          <View style={{ position: 'absolute', zIndex: 999, justifyContent: 'center', width: '100%', paddingTop: 10 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center', fontFamily: "OpenSans-Bold" }}>COSMIC MIND</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center', fontFamily: "OpenSans-Regular" }}>MEDITATION</Text>
          </View>


          <View style={{ position: 'absolute', zIndex: 999, justifyContent: 'center', width: '100%', paddingTop: 10, bottom: 20, left: 20 }}>
            <Pressable>
              <AntDesign name='playcircleo' color={'#FFFFFF'} size={40} />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: '#cdccc4', height: 120, width: '7%', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
        <Feather name='chevron-right' color={'#3a0b6c'} size={30} />
      </View>
    </View>
  )
}

export default TopPics */


import { Image, Pressable, View, Text, Dimensions, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { Fragment } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { NeurogonivityImage, } from '../assets/images'

const TopPics = () => {
  const CarouselRef = React.useRef()
  const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

  const onNext = () => {
    if (CarouselRef?.current){
      CarouselRef?.current?.snapToNext()
    }
  }
  const onPrev = () => {
    if (CarouselRef?.current){
      CarouselRef?.current?.snapToPrev()
    }
  }
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Pressable onPress={() => onPrev()} style={{ backgroundColor: '#cdccc4', height: 120, width: '7%', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
        <Feather name='chevron-left' color={'#3a0b6c'} size={30} />
      </Pressable>

      <View style={{ backgroundColor: '#e1e6ed', padding: 10, borderRadius: 20, width: '80%', elevation: 6 }}>
        <Text style={{ paddingBottom: 10, textAlign: 'center', color: '#191b6c', fontSize: 20, fontFamily: 'Nunito-ExtraBold' }}>Today's Top Pick</Text>

        <View style={{ backgroundColor: '#191b6c', justifyContent: 'center', alignItems: 'center', borderRadius: 20, height: 400, width: '100%', overflow: 'hidden' }}>
          <Carousel
            ref={CarouselRef}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <Fragment>
                  <Pressable key={index} style={{ height: '100%', width: '100%', borderRadius: 10, overflow: 'hidden', }}>
                    <Image source={item.image} resizeMode='stretch' style={{ width: '100%', height: '100%', borderRadius: 10 }} />


                    <View style={{ position: 'absolute', zIndex: 999, justifyContent: 'center', width: '100%', paddingTop: 10 }}>
                      <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center', fontFamily: "OpenSans-Bold" }}>COSMIC MIND</Text>
                      <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center', fontFamily: "OpenSans-Regular" }}>MEDITATION</Text>
                    </View>


                    <View style={{ position: 'absolute', zIndex: 999, justifyContent: 'center', width: '100%', paddingTop: 10, bottom: 20, left: 70 }}>
                      <Pressable>
                        <AntDesign name='playcircleo' color={'#FFFFFF'} size={30} />
                      </Pressable>
                    </View>
                  </Pressable>
                </Fragment>
              )
            }}

            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            hasParallaxImages={false}
            firstItem={1}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            // inactiveSlideShift={20}
            containerCustomStyle={{
              marginTop: 0,
              overflow: 'visible'
            }}
            contentContainerCustomStyle={{ paddingVertical: 0 }}
            loop={false}
            loopClonesPerSide={1}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => { console.log(index)}}
          />
        </View>
      </View>

      <Pressable onPress={() => onNext()} style={{ backgroundColor: '#cdccc4', height: 120, width: '7%', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
        <Feather name='chevron-right' color={'#3a0b6c'} size={30} />
      </Pressable>
    </View>
  )
}

export default TopPics;

const data = [
  { id: 1, image: NeurogonivityImage },
  { id: 2, image: NeurogonivityImage },
  { id: 3, image: NeurogonivityImage },
  { id: 4, image: NeurogonivityImage },
  { id: 5, image: NeurogonivityImage },
  { id: 6, image: NeurogonivityImage },
  { id: 7, image: NeurogonivityImage },
  { id: 8, image: NeurogonivityImage },
  { id: 9, image: NeurogonivityImage },
  { id: 10, image: NeurogonivityImage },
]