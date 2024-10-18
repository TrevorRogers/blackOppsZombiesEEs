
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import tabsBackground from '../../assets/images/tabsBackground.png'

const BO3 = () => {
  return (
    <ImageBackground source={tabsBackground} style={{width: '100%', height: '100%', tintColor: 'cyan'}} blurRadius={4}>
    <ScrollView style={{backgroundColor: 'rgba(0,0,0, 0.5)', flex: 1 }}>
   
        <Text style={{color: 'white', fontSize: 27, color: 'orange', textAlign: 'center', marginTop: 20}}>
          Choose your map
        </Text>
      <View style={{ margin: 20}}>
    <View>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 3, height: 60}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100',}}>Shadows of Evil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 3, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>The Giant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60,}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Der Eisendrache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Zetsuboh </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Gorod Krovi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Revelations</Text>
        </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default BO3