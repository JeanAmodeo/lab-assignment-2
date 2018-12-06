// This is the Link API
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const source = 'ars-technica';
const apiKey = "a72b836c838b46828888472c3193831f";
const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

// Pass this content as 'props' to child components
const Tech = props => (
    <div>
        <h2>Tech news from {source.split("-").join(" ")}</h2>

        <div>
          {props.articles.map(article=>(
            <section>
              <h3>{article.title}</h3>
              <p className="author">by {article.author} | {formatDate(article.publishedAt)}</p>              <img src={article.urlToImage} alt="article image" className="img-article"></img>
              <p>{article.description}</p>
              <p>{article.content}</p>
              <p><Link href={`/post?title=${article.title}`}><a>Read More</a></Link></p>            
            </section>
          ))}
        </div>
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
  );

  Tech.getInitialProps = async function(){
    const res = await fetch(url);
    const data = await res.json();
    console.log(`Show data fetched. Count :${data.articles.length}`);
    return{
      articles : data.articles
    }
  }

  function formatDate(input) {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"
    ];
    let date = new Date(input);
    
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
export default Tech;
