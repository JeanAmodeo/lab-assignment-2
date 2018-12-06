// This is the Link API
import {withRouter} from 'next/router'


const Post = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <style jsx global>{`
          
h1,h2,h3{font-family: 'Roboto Slab', sans-serif;}
p{font-family: 'Archivo', sans-serif;}
section{
  width:60%;
  border-bottom : 2px solid #ff00e0;
  padding : 1em;
  margin: 1em
}
.img-article{
  max-width:50%;
}
.author{
  font-style:italic;
  font-size : 0.8em;
}


`}</style>
  </div>


));
export default Post
