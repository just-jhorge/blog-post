import React from "react";

const Post = (props) => {
    return (
        <div
            className="flex flex-col items-center justify-center w-64 h-64 text-center shadow-md py-12 px-10 cursor-pointer"
            onClick={props.clicked}
        >
            <h3 className="font-semibold text-xl mb-3">{props.title}</h3>
            <p className="text-gray-400">{props.author}</p>
        </div>
    );
};

export default Post;
