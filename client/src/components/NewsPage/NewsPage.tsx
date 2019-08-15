import * as React from 'react';
import { APIKey } from '../../config';
import { Component } from 'react';
import '../../config';
import './NewsPage.css';
 
export interface INewsPageState {
    'articleList':any[]
}
 
class INewsPage extends Component<{}, INewsPageState> {
    public state = { 
        'articleList':[]  
    }
    public getArticles=()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=nz&apiKey=${APIKey}`)
        .then((data:any)=> data.json())
        .then((resp:any)=>{
            const output:any[] = [];
            resp.articles.forEach((article:any)=>{
                const row = (
                <tr>
                    <div className="article-details">
                        <td>{article.isFavourited === true?<div><i className="fav-icon fas fa-bookmark"/></div>:<div><i className="fav-icon far fa-bookmark"/></div>}</td>
                        <td><img width="100px" height="100px"src={article.urlToImage}/></td>
                        <td><div><b>Title:</b>{article.title}</div><div className="article-description"><b>Description:</b>{article.description}</div><div className="article-author"><b>Author:</b>{article.author}</div></td>
                    </div>
                </tr>);
                output.push(row);
            });
            this.setState({articleList:output})
        })       
    }
    public componentDidMount(){
        this.getArticles(); 
    }
    public render() {
        const output:any[]= this.state.articleList;
        return ( 
            <div className="articles-container">
                <h3>List of Articles</h3>
                {output}
            </div>
         );
    }
}
 
export default INewsPage;