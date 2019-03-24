import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";


class AddPost extends Component {
  constructor(props){
    super(props)
    this.state = {
        title: '',
        body:''
    }
  }


  handleChange =(evt)=>{
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit =(evt)=>{
    console.log(this.state);
    evt.preventDefault();
    this.props.addPost(this.state);
  }

  render(){
    return (
      <div className="row">
          <form onSubmit={this.handleSubmit}>
            <label>title</label><input type="text" name="title" onChange={this.handleChange} />
            <label>body</label><input type="text" name="body" onChange={this.handleChange} />
            {/* <button onClick={() =>{ this.props.addPost(this.state)}}>Submit</button> */}
            <input className="btn right" type="submit" value="Submit" />
          </form>
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
    addPost:(post)=>{ dispatch(addPost(post)) },
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddPost)