import { Text, View } from "react-native";
import Post from "@/interfaces/post";

const RenderPost = ({
    author,
    id,
    imageUrls,
    likedBy,
    postTime,
    title
} : Post ) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{id}</Text>
            <Text>{author}</Text>
        </View>
    )
};

export default RenderPost;