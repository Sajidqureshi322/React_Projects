import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date} = this.props;
    return (
      <div className='my-3s'>
        <div className="card">
            <img src={!imgUrl?"https://www.livemint.com/lm-img/img/2023/08/31/600x338/parliament_1693474263743_1693474270468.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm  btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
