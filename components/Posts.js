import Post from "./Post"

// Just for now later we will replace it with the backend
const dummyData = [
    {
        id: '1',
        username: 'Cory House',
        userImage: '/vercel.svg',
        img: 'https://images.unsplash.com/photo-1672664648342-dca370c6ebd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        caption: 'Code is like humor. When you have to explain it, it’s bad.'
    },
    {
        id: '1',
        username: 'Anonymous',
        userImage: '/next.svg',
        img: 'https://images.unsplash.com/photo-1672833937157-1d13b2d803de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        caption: 'It’s not a bug; it’s an undocumented feature.'
    }
]

const Posts = () => {
    return (
        <div>
            {/*Seprate Post  */}
            {dummyData.map(post => (
                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImage={post.userImage}
                    img={post.img}
                    caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts