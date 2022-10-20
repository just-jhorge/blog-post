import React, { Component } from "react";
import FullPost from "../components/FullPost";
import Post from "../components/Post";
import NewPost from "../components/NewPost";
import axios from "axios";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                const posts = response.data.slice(0, 5);
                const updatedPosts = posts.map((post) => {
                    return { ...post, author: "George" };
                });
                this.setState({ posts: updatedPosts });
                // console.log(response.data[0]);
            })
            .catch((error) => {
                this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        let posts = <p className="text-center">Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                );
            });
        }

        return (
            <div className="space-y-5">
                <section className="flex flex-col md:flex-row flex-wrap items-center justify-center space-x-3">
                    {posts}
                </section>
                <section className="flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section className="flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
