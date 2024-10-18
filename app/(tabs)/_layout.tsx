import { Tabs } from 'expo-router';
import React from 'react';
import { Button, Image } from 'react-native';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import bo3logo from '../../assets/images/bo3logo.png'
import bo4logo from '../../assets/images/bo4logos.png'

export default function TabLayout() {


  return (
    <>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 50,
        },
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
      />
         <Tabs.Screen
        name="BO3"
        options={{
          headerShown: true,
          headerTitle: 'Black Ops 3',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#121212',
            borderColor: 'orange'
          },
          headerTitleStyle: {
            fontSize: 30,
            color: 'white',
            alignSelf: 'center',
            fontWeight: 600,
             margin: 10
          },
          headerRight: () => (
            <Button 
              onPress={() => router.push('/Home')}
              title='Sign In'
              color='orange'
              />
          ),
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image 
                style={{width: 40, height: 35}}
                source={bo3logo}/>
              )
            }
        }}
      />
         <Tabs.Screen
        name="BO4"
        options={{
          headerShown: true,
          headerTitle: 'Black Ops 4',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#121212',
            borderColor: 'orange'
          },
          headerTitleStyle: {
            fontSize: 30,
            color: 'white',
            alignSelf: 'center',
            fontWeight: 600,
             margin: 10
          },
          headerRight: () => (
            <Button 
              onPress={() => router.push('/Home')}
              title='Sign In'
              color='orange'
              />
          ),
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image 
                style={{width: 50, height: 35}}
                source={bo4logo}/>
              )
            }
        }}
      />
         <Tabs.Screen
        name="ColdWar"
        options={{
          title: 'Cold War',
        }}
      />
    </Tabs>
    </>
  );
}
