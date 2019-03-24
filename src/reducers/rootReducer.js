const initState = {
  posts: [
    {id:1,title:'this is one',    body:'asd afdsad ggrg gregvdsfd farg fv'},
    {id:2,title:'this is two',    body:'qwe vqwrew qweg gregvdsfd farg fv'},
    {id:3,title:'this is three',  body:'zxcvzxzxczxc zxc gregvsfd farg fv'}
  ]
}
let ID = 3;
const rootReducer = (state = initState, action) => {
  console.log(action); 
  switch (action.type) {
    case "DELETE_POST":
      let newPosts= state.posts.filter(post=>{
        return action.id !== post.id
      })
      return {
        ...state,
        posts:newPosts
      };
    case "ADD_POST":
    let newPo= {
        id: ++ID,
        title: action.post.title,
        body: action.post.body
    }
      return {
        ...state,
        posts: [...state.posts, newPo]
      };
    default:
      return{
        ...state
      }
  }
return state;
}

export default rootReducer

