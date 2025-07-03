import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';


export default function FeedScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>   {/* This clears top of screen device space (camera, time, alerts, etc.) */}
                {/* <ScrollView> */}
                    <ThemedText type="title">Feed</ThemedText>
                {/* </ScrollView> */}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}