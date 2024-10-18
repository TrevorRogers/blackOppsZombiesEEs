import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, ImageBackground } from 'react-native'
import {Link, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import tabsBackground from '../../assets/images/tabsBackground.png'

const BO4 = () => {
  return (

    <ImageBackground source={tabsBackground} style={{width: '100%', height: '100%', tintColor: 'cyan'}} blurRadius={4}>
    <ScrollView style={{backgroundColor: 'rgba(0,0,0, 0.5)', flex: 1 }}>
  
        <Text style={{color: 'white', fontSize: 27, color: 'orange', textAlign: 'center', marginTop: 20}}>
          Choose your map
        </Text>
    <View style={{ margin: 20}}>
  <View>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Tag der Toton</Text>
      </TouchableOpacity>
      {/* <Link href="./BloodStep0" asChild> */}
      <TouchableOpacity 
      onPress={() => router.push("/BloodStep0")}
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Blood of the Dead</Text>
      </TouchableOpacity>
      {/* </Link> */}
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Alpha Omega</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>IX</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Ancient Evil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Dead of the Night</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Voyage of Despair</Text>
      </TouchableOpacity>
  </View>
  </View>
  </ScrollView>
  </ImageBackground>
  )
}

export default BO4