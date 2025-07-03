import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function UploadScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ThemedText type="title">Upload</ThemedText>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}