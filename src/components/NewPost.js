import axios from "axios";
import React, { Component } from "react";

class NewPost extends Component {
    state = {
        title: "",
        content: "",
        author: "George",
    };

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        };

        axios
            .post("https://jsonplaceholder.typicode.com/posts", data)
            .then((response) => {
                console.log(response);
            });

        this.setState({
            title: "",
            content: "",
            author: "George",
        });
    };

    render() {
        return (
            <div className="w-full p-10">
                <h2 className="mb-5 text-2xl font-semibold uppercase">
                    add a post
                </h2>
                <div className="w-full mb-4">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={this.state.title}
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>
                <div className="w-full mb-4">
                    <label
                        htmlFor="content"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your message
                    </label>
                    <textarea
                        id="content"
                        rows="4"
                        value={this.state.body}
                        onChange={(e) =>
                            this.setState({ content: e.target.value })
                        }
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="w-full mb-8">
                    <label
                        htmlFor="author"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Author
                    </label>
                    <select
                        id="author"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) =>
                            this.setState({ author: e.target.value })
                        }
                    >
                        <option defaultValue value="george">
                            George
                        </option>
                        <option value="gisbony">Gisbony</option>
                        <option value="loretta">Loretta</option>
                        <option value="esther">Esther</option>
                        <option value="kofi">Kofi</option>
                    </select>
                </div>
                <div>
                    <button
                        className="uppercase text-green-600 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transition-colors"
                        onClick={this.postDataHandler}
                    >
                        Add Post
                    </button>
                </div>
            </div>
        );
    }
}

export default NewPost;
