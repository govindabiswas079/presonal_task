import React, { Fragment } from 'react'
import { StatusBar, ScrollView } from 'react-native';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import AppHeader from './AppHeader/AppHeader'
import { View, Text } from 'react-native';
import { Pressable } from 'react-native';
import { NeurogonivityImage, Wishdom_1, Wishdom_2, Wishdom_3, Wishdom_4, Wishdom_5, } from './assets/images'
import { TopPics, MeditationUI, MeditationsCourses, MeditationChallange, UpcommingEvents, BlogPost, WishdomWord } from './Components'
import LinearGradient from 'react-native-linear-gradient';
import GradientText from './UIComponent/GradientText'

const App = () => {

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <AppHeader style={{ backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
          <Pressable style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }}>
            <Feather name='menu' color={'blue'} size={30} />
          </Pressable>
          <View style={{ flexGrow: 1 }} />
          <View>
            <GradientText style={{ fontSize: 22, fontFamily: 'Nunito-ExtraBoldItalic' }}>TAT-TVAM-ASI</GradientText>
            <Text style={{ color: '#191b6c', fontSize: 16, fontFamily: 'OpenSans-SemiBold', textAlign: 'center' }}>"I am That I am"</Text>
          </View>
          <View style={{ flexGrow: 1 }} />
          <Pressable style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }}>
          </Pressable>
        </View>
      </AppHeader>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#e2e2e9' }}>
        <LinearGradient colors={['#b6c0d0', '#e2e2e9', '#e2e2e9']}>
          <View style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Nunito-Bold', color: '#191b6c' }}>Hi, Arjun Cherukuri</Text>
          </View>

          <TopPics />
          
          <MeditationUI
            Title={`Master's Grace`}
            SubTitle={'Meditations'}
            ButtonTitle={'Watch Category Video'}
            idVerify={true}
            data={banners}
          />
          <MeditationUI
            Title={`Bundled`}
            SubTitle={'Meditations'}
            ButtonTitle={'Watch Category Video'}
            idVerify={false}
            data={banners}
          />
          <MeditationUI
            Title={`Focussed`}
            SubTitle={'Meditations'}
            ButtonTitle={'Watch Category Video'}
            idVerify={false}
            data={banners}
          />


          <MeditationsCourses
            Title={`Suparmental`}
            SubTitle={'Meditations Courses'}
            Paragraph={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            data={banners}
          />

          <MeditationChallange />

          <UpcommingEvents
            banners={banners}
          />

          <BlogPost
            Title={`Videos`}
            SubTitle={'How to be Blissfull 24x7?'}
            ButtonTitle={'Read More ...'}
            DateTime={'January 13, 20 23'}
            Paragraph={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            data={banners}
          />
          <BlogPost
            Title={`Videos`}
            SubTitle={'How to be Blissfull 24x7?'}
            ButtonTitle={'Read More ...'}
            DateTime={'January 13, 20 23'}
            Paragraph={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            data={banners}
          />
          <WishdomWord
            Title={`Wishdom Words`}
            data={wishdom}
          />
        </LinearGradient>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default App

const banners = [
  { id: 1, image: NeurogonivityImage, name: 'sample name' },
  { id: 2, image: NeurogonivityImage, name: 'sample name' },
  { id: 3, image: NeurogonivityImage, name: 'sample name' },
  { id: 4, image: NeurogonivityImage, name: 'sample name' },
  { id: 5, image: NeurogonivityImage, name: 'sample name' },
  { id: 5, image: NeurogonivityImage, name: 'sample name' },
  { id: 6, image: NeurogonivityImage, name: 'sample name' },
  { id: 7, image: NeurogonivityImage, name: 'sample name' },
  { id: 8, image: NeurogonivityImage, name: 'sample name' },
  { id: 9, image: NeurogonivityImage, name: 'sample name' },
  { id: 9, image: NeurogonivityImage, name: 'sample name' },
]
const wishdom = [
  { id: 1, image: Wishdom_1, name: 'sample name' },
  { id: 2, image: Wishdom_2, name: 'sample name' },
  { id: 3, image: Wishdom_3, name: 'sample name' },
  { id: 4, image: Wishdom_4, name: 'sample name' },
  { id: 5, image: Wishdom_5, name: 'sample name' },
  { id: 5, image: Wishdom_1, name: 'sample name' },
  { id: 6, image: Wishdom_2, name: 'sample name' },
  { id: 7, image: Wishdom_3, name: 'sample name' },
  { id: 8, image: Wishdom_4, name: 'sample name' },
  { id: 9, image: Wishdom_5, name: 'sample name' },
  { id: 9, image: Wishdom_3, name: 'sample name' },
]
