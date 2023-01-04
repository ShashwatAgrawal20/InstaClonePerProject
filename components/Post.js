import {
    BookmarkIcon,
    EllipsisHorizontalIcon,
    ChatBubbleLeftEllipsisIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/24/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid"


const Post = ({ id, username, userImage, img, caption }) => {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src={userImage} alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <EllipsisHorizontalIcon className='h-5' />

            </div>
            {/* Image */}
            <img src={img} className="object-cover w-full" alt="" />
            {/* Buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="postBtn" />
                    <ChatBubbleLeftEllipsisIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn -rotate-45" />
                </div>
                <BookmarkIcon className="postBtn" />
            </div>
            {/* caption */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username} </span>
                {caption}
            </p>

            {/* Comments */}

            {/* Input */}
        <form className="flex items-center p-4">
            <FaceSmileIcon className="h-7"/>
            <input type="text" 
            placeholder="Add a comment...."
            className="border-none flex-1 focus:ring-0 outline-none"/>
        <button className="font-semibold text-blue-400">Post</button>
        </form>
            
        </div>
    );
};

export default Post;
