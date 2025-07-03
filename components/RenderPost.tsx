import { Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Post from "@/interfaces/post";

const RenderPost = ({
    author,
    id,
    imageUrls,
    likedBy,
    postTime,
    title
}: Post) => {
    return (
        <View style={{ paddingBottom: 20 }}>
            <Text>Posted by: {author}</Text>
            <Text>{title}</Text>
            <Image
                style={{ height: 350, width: 350 }}
                source={{ uri: imageUrls[0] }}
            />
        </View>
    )
};

export default RenderPost;