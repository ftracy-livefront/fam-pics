import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { Navscreens } from '@/constants/Navscreens';
import { useColorScheme } from '@/hooks/useColorScheme';

const homeIcon = require('../../assets/images/home_icon.png');
const homeIconFocused = require('../../assets/images/home_icon_selected.png');
const uploadIcon = require('../../assets/images/upload_icon.png');
const uploadIconFocused = require('../../assets/images/upload_icon_selected.png');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name={Navscreens.tabs.feed}
        options={{
          title: 'Feed',
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingTop: 15,
          },
          tabBarIcon: ({ size, focused, color }) => {
            const homeIconActive = focused ? homeIconFocused : homeIcon;
            return (
              <Image
                source={homeIconActive}
                style={{ width: 55, height: 55 }}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name={Navscreens.tabs.updload}
        options={{
          title: 'Upload',
          tabBarShowLabel: false,  // NOTE - this only takes effect when that tab is highlighted
          tabBarStyle: {
            paddingTop: 15,
          },
          tabBarIcon: ({ size, focused, color }) => {
            const uploadIconActive = focused ? uploadIconFocused : uploadIcon;
            return (
              <Image
                source={uploadIconActive}
                style={{ width: 55, height: 55 }}
              />
            );
          }
        }}
      />
    </Tabs>
  );
}


// <Tabs
// This uses Bottom Tabs Navigator: https://reactnavigation.org/docs/bottom-tab-navigator/
// TODO all these "screenOptions" were default Expo. Study these more. 
// screenOptions={{
//   tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//   headerShown: false,
//   tabBarButton: HapticTab,
//   tabBarBackground: TabBarBackground,
//   tabBarStyle: Platform.select({
//     ios: {
//       // Use a transparent background on iOS to show the blur effect
//       position: 'absolute',
//     },
//     default: {},
//   }),
// }}
// ></Tabs>