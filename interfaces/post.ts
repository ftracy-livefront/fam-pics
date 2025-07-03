
interface Post {
    author: string,
    id: string,
    imageUrls: string[],
    likedBy: string[] | null, // likes count is just nummber of Users' name strings in the array. Array.count()
    postTime: Date | null,
    title: string,
}

export default Post;