import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from "react-redux";
import AddPost from './AddPost';
import { deletePost } from "../actions/postActions";

class Home extends Component {
  handleClick=(id)=>{
    console.log(id)
    this.props.deletePost(id);
    this.props.history.push('/');
  } 
  render(){
    console.log(this.props)
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
              <button className="btn-small grey right" onClick={()=>{this.handleClick(post.id)}}>
                Delete
              </button>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home row">
          <h4 className="center">Home</h4>
          <AddPost/>
          {postList}
        </div>
      </div>
    )
  }
}
 
const mapStateToProps=(state)=>{
  return{
    posts:state.posts
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    deletePost:(id)=>{ dispatch(deletePost(id)) },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)