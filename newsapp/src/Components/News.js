import React,{useEffect,useState}from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News= (props)=> {
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);



   const capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1); 
   }
   const updateNews = async () =>{
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=217182b605b14bae8faaf366dcc71b35&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
   }
   useEffect(() => {
     document.title = `${capitalizeFirstLetter(props.category)} - News`;
     updateNews();
     /* eslint-disable */
   }, [])
   const fetchMoreData = async () => {   
      setPage(page+1) 
      const url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=217182b605b14bae8faaf366dcc71b35&page=${page+1}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    };

    return (
   <>
   <h1 className="text-center" style={{ margin: '35px 0px',marginTop: '90px' }}>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
   {loading && <Spinner />}
   <InfiniteScroll
       dataLength={articles.length}
       next={fetchMoreData}
       hasMore={articles.length !== totalResults}
       loader={<Spinner/>}
   > 
       <div className="container">
            
       <div className="row">
           {articles.length > 0 && articles.map((element) => {
               return <div className="col-md-4" key={element.url}>
                   <Newsitem title={element.title?element.title:""} description = {element.description?element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
               </div>
           })}
       </div>
       </div> 
   </InfiniteScroll>

</>
)
}
News.defaultProps = {
   country: 'in',
   pageSize: 6,
   category: 'general',
}
News.propTypes = {
   country: PropTypes.string, 
   pageSize: PropTypes.number,
   category: PropTypes.string,
}

export default News