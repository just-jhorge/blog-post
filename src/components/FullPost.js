import React, { Component } from "react";
import axios from "axios";

class FullPost extends Component {
    state = {
        loadedPost: null,
    };
    componentDidUpdate() {
        if (this.props.id) {
            if (
                !this.state.loadedPost ||
                (this.state.loadedPost &&
                    this.state.loadedPost.id !== this.props.id)
            ) {
                axios
                    .get(
                        `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
                    )
                    .then((response) => {
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }
    render() {
        let post = <p className="text-center p-10">Please select a Post!</p>;

        if (this.props.id) {
            post = <p className="text-center p-10">Loading...</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="flex flex-col items-center justify-center p-10 h-auto">
                    <h1 className="text-2xl font-semibold mb-5 capitalize">
                        {this.state.loadedPost.title}
                    </h1>
                    <p className="mb-10">{this.state.loadedPost.body}</p>
                    <button className="uppercase text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transition-colors">
                        Delete
                    </button>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;
