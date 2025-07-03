import { Image } from 'expo-image';
import { Animated, FlatList, Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import RenderPost from '@/components/RenderPost';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import mockFeedData from '@/test/mockFeedData';

const testData = mockFeedData;

export default function FeedScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView> 
                <ThemedText type="title">Feed</ThemedText>
                <FlatList
                    data={testData.posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                        <Animated.View>
                            <RenderPost {...item} />
                        </Animated.View>
                    }
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}