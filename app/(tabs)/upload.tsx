import { Image } from 'expo-image';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

const onPressFunction = () => {
    console.log("pressed")
}

export default function UploadScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ThemedText type="title">Upload</ThemedText>
                <Pressable onPress={onPressFunction}>
                    <View
                        style={{
                            width: 200,
                            height: 100,
                            backgroundColor: Colors.livefront.lightBlue,
                            borderRadius: 20  // Applies uniform rounded corners
                        }}>
                        <Text>
                            upload an image
                        </Text>
                    </View>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}