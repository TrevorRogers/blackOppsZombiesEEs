import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import {Link, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const BO4 = () => {
  return (
    <SafeAreaView style={{color: 'black', backgroundColor: 'black'}}>
    <ScrollView style={{backgroundColor: 'black'}}>
    <View style={{disply: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: 'white', fontSize: 50}}>
        BO4 Zombies
      </Text>
      <Text style={{color: 'white', fontSize: 25, color: 'orange'}}>
        Choose your map
      </Text>
    </View>
    <View style={{border: 'solid 1px white', margin: 20}}>
  <View>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
         borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Tag der Toton</Text>
      </TouchableOpacity>
      {/* <Link href="./BloodStep0" asChild> */}
      <TouchableOpacity 
      onPress={() => router.push("/BloodStep0")}
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
         borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Blood of the Dead</Text>
      </TouchableOpacity>
      {/* </Link> */}
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
         borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Alpha Omega</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
         borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>IX</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
         borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Ancient Evil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
         borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Dead of the Night</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
         borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Voyage of Despair</Text>
      </TouchableOpacity>
  </View>
  </View>
  </ScrollView>
  </SafeAreaView>
  )
}

export default BO4