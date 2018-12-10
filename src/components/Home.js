import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ball from '../pokeball.png';


class Home extends Component{
    
    waterMark = {
        position:"absolute",
        top: "20px",
        left: "-100px",
        opacity: "0.6"
    }

    postStyle={
        overflow: "hidden",
        paddingLeft: "80px"
    }

    state = {
        posts: []
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            this.setState({
                posts: data.slice(0,10)
            })
        })

    }
   
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
           posts.map( post => {
               return (
                   <div style={this.postStyle} className="post card" key={post.id}>
                     <img style={this.waterMark} src={ball} />
                       <div className="card-content">
                       <Link to={'/' + post.id}>
                          <span className="card-title red-text">{post.title}</span>
                          </Link>
                          <p>{post.body}</p>
                       </div>
                   </div>
               )
           })
        ) : (
           <div>No Post yet</div>
        )
    return(
        <div className="container">
               <h4 className="center">Home</h4>
               {postList}
        </div>
    )
}
}

export default Home