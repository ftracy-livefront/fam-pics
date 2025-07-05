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

// const { google } = require('googleapis');
import * as ImagePicker from 'expo-image-picker';

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
                            borderRadius: 20
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


// const CLIENT_ID = 'YOUR CLIENT ID';
// const CLIENT_SECRET = 'YOUR CLIENT SECRET';
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground';


// const oauth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// );


// const drive = google.drive({
//     version: 'v3',
//     auth: oauth2Client,
// });

const onPressFunction = async () => {
    
    console.log("pressed!! ")

    // following upload example here: https://gist.github.com/trulymittal/fd9c4bfd1f22fb9c62847a351dcbf0a5  // npm install googleapis
    // filestream example here: https://www.atomlab.dev/tutorials/react-native-fs  // npm install react-native-fs
    // expo image picker: https://docs.expo.dev/versions/latest/sdk/imagepicker/  // npx expo install expo-image-picker
    
    
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    // try {
    //     const response = drive.files.create({
    //         requestBody: {
    //             name: 'example.jpg', //This can be name of your choice
    //             mimeType: 'image/jpg',
    //         },
    //         media: {
    //             mimeType: 'image/jpg',
    //             // body: fs.createReadStream(homeIcon),
    //         },
    //     });

    //     console.log(response.data);
    // } catch (error) {
    //     if (error instanceof Error) {
    //         console.log(error.message);
    //     } else {
    //         console.log(error);
    //     }
    // }

}