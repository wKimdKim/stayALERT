import * as React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../config';
import '../NewsPage/NewsPage.css';
 
export interface IFavouritePageState {
    'articleList':any[]
}
 
class FavouritePage extends Component<{}, IFavouritePageState> {
    public state = { 
        'articleList':[]  
    }
    public getArticles=()=>{
        fetch(`https://localhost:44379/api/Articles`)
        .then((data:any)=> data.json())
        .then((resp:any)=>{
            const output:any[] = [];
            resp.forEach((article:any)=>{
                const author=article.author===null?"N/A":article.author
                const row = (
                <div className="article-row">
                    <div className="article-details">
                        <td>
                            <div className="image">
                            <Link to ={{
                                pathname:'/favourite/'+ article.title,
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
                                    pathname:'/favourite/'+ article.title,
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
            }
            );
            this.setState({articleList:output})
        })       
    }
    public componentDidMount(){
        this.getArticles(); 
    }

    public render() {
        const output:any[]= this.state.articleList;
        let noFav;
        if(output.length===0){
            noFav=<div>No favourite articles</div>
        }
        return ( 
            <div className="articles-container">
                <h3>List of Articles</h3>
                {output}
                {noFav}
            </div>
         );
    }
}
 
export default FavouritePage;