import { Users } from "@/constants/Users"
import Feed from "@/interfaces/feed"
import Post from "@/interfaces/post"

const post1: Post = {
    author: Users.caleb,
    imageUrls: ["https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/410/205/75/dam/disneyland/destinations/disneyland/tomorrowland/space-mountain-night-16x9.jpg?1747061483711"],
    id: 'eac5ce6c-d46b-4ac9-b240-008aad9cd69d',
    likedBy: [
        Users.hazel
    ],
    postTime: null,
    title: "Space Mountain",
}

const post2: Post = {
    author: Users.hazel,
    id: 'e179b47a-a617-49c3-a446-2491da16385b',
    imageUrls: ['https://farm5.static.flickr.com/4367/36396925843_fc6a38e12f_b.jpg'],
    likedBy: [
        Users.melissa,
        Users.charlotte
    ],
    postTime: null,
    title: "Moana",
}

const post3: Post = {
    author: Users.forrest,
    id: '7f3270d6-4ca6-4451-b5f3-7258f36516e2',
    imageUrls: [
        'https://www.disneyfoodblog.com/wp-content/uploads/2018/02/disneyland-rose-gold-churro-1-copy.jpg', 
        'https://www.themeparkinsider.com/art/2018/churro_pineapple.jpg'
    ],
    likedBy: [
        Users.caleb,
        Users.charlotte,
        Users.isabelle
    ],
    postTime: null,
    title: "Churros are the best!"
}

const post4: Post = {
    author: Users.melissa,
    id: '074c7f0a-25a1-453a-8a10-ed89f767786c',
    imageUrls: [
        'https://farm8.static.flickr.com/7355/9673199355_b3d0f92ace_b.jpg'
    ],
    likedBy: null,
    postTime: null,
    title: "Aurora at Disneyland"
}

const mockFeedData: Feed = {
    posts: [post1, post2, post3, post4]
}

export default mockFeedData;