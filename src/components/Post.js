import React, { Component} from 'react'

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(data => {
            this.setState({
                post: data
            })

        })
       
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
           <div>Loading....</div>
        )
        return(
            <div className="container">
               {post}
            </div>
        )
    }

}

export default Post