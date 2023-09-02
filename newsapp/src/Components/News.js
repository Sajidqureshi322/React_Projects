import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
   static defaultProps = {
      country: 'in',
      pageSize: 6,
      category: 'general',
   }
   static propTypes = {
      country: PropTypes.string, 
      pageSize: PropTypes.number,
      category: PropTypes.string,
   }
   capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1); 
   }
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`;
    }
    async componentDidMount(){
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=217182b605b14bae8faaf366dcc71b35&page=1&pageSize=${this.props.pageSize}`;
       this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
    }
    handleNextClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=217182b605b14bae8faaf366dcc71b35&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
         page: this.state.page+1,
         articles: parsedData.articles,
         loading: false
      })
   }
   handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=217182b605b14bae8faaf366dcc71b35&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
         page: this.state.page - 1,
         articles: parsedData.articles,
         loading: false
      })
   }
  render() {
    return (
      <div className='container my-3'>
      {this.state.loading && <Spinner/>}
      <h1 className='text-center my-5'>Top Headlines from all over India</h1>
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
               return <div className="col-md-4 my-3" key = {element.url}>
                     <Newsitem title={element.title?element.title:""} description = {element.description?element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                  </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
