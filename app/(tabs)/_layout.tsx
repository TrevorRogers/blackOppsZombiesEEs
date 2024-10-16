import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <>
    <Tabs
      screenOptions={{
        headerShown: false,
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
          title: 'BO3',
        }}
      />
         <Tabs.Screen
        name="BO4"
        options={{
          title: 'BO4',
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
