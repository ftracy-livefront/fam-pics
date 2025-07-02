import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

const homeIcon = require('../../assets/images/home_icon.png');
const homeIconFocused = require('../../assets/images/home_icon_selected.png');
const uploadIcon = require('../../assets/images/upload_icon.png');
const uploadIconFocused = require('../../assets/images/upload_icon_selected.png');

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
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ size, focused, color }) => {
            const homeIconActive = focused ? homeIconFocused : homeIcon;
            return (
              <Image
                source={homeIconActive}
                style={{ width: size, height: size }}
              />
            );
          }        
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: 'Upload',
          tabBarIcon: ({ size, focused, color }) => {
              const uploadIconActive = focused ? uploadIconFocused : uploadIcon;
              return (
                <Image
                  source={uploadIconActive}
                  style={{ width: size, height: size }}
                />
              );
        }
      }}
      />
    </Tabs>
  );
}
