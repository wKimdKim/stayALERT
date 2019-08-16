import * as React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
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
        fetch(`https://localhost:44379/api/News`)
        .then((data:any)=> data.json())
        .then((resp:any)=>{
            const output:any[] = [];
            resp.articles.forEach((article:any)=>{
                const author=article.author===null?"N/A":article.author
                const row = (
                <div className="article-row">
                    <div className="article-details">
                        {/* <td>{article.isFavourited === true?<div><i className="fav-icon fas fa-bookmark"/></div>:<div><i className="fav-icon far fa-bookmark"/></div>}</td> */}
                        <td>
                            <div className="image">
                            <Link to ={{
                                pathname:'/Article/'+ article.title,
                                state:{
                                    articleDetail: article
                                }
                            }}>
                                <img src={article.urlToImage} alt="N/A"/>
                            </Link>
                            </div>
                        </td>
                        <td>
                            <div>
                                <b>Title:</b>
                                <Link to ={{
                                    pathname:'/Article/'+ article.title,
                                    state:{
                                        articleDetail: article
                                    }
                                }}>
                                    {article.title}
                                </Link>
                            </div>
                            <div className="article-description"><b>Description:</b>{article.description}</div>
                            <div className="article-author"><b>Author:</b>{author}</div></td>
                    </div>
                </div>);
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