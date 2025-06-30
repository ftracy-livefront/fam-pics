import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

import homeIcon from '../../assets/images/home_icon.png';
import homeIconFocused from '../../assets/images/home_icon_selected.png';
import uploadIcon from '../../assets/images/upload_icon.png';
import uploadIconFocused from '../../assets/images/upload_icon_focused.png';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      /> */}
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ size, focused, color }) => {
            let focusedBorder = 0;
            const homeUrl = focused ? '../../assets/images/home_icon_focused.png' : '../../assets/images/home_icon.png';
            return (
              <Image
                source={require(`${homeUrl}`)}
                style={{ width: size, height: size }}
              />
            );
          }        
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Upload',
          tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../../assets/images/upload_icon.png')}
                />
              );
        }
      }}
      />
    </Tabs>
  );
}
