import * as React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../config';
import '../NewsPage/NewsPage.css';
 
export interface IFavouritePageState {
    'articleList':any[],
    'isLoaded':any
}
 
class FavouritePage extends Component<{}, IFavouritePageState> {
    public state = { 
        'articleList':[],  
        'isLoaded':false
    }
    public getArticles=()=>{
        fetch(`https://stayalertdevop.azurewebsites.net/api/Articles`,{
            mode:"no-cors"
        })
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
                                pathname:'/favourite/'+ article.articleTitle,
                                state:{
                                    articleDetail: article
                                }
                            }}>
                                <img src={article.thumbnailUrl} alt="N/A"/>
                            </Link>
                            </div>
                        </td>
                        <td>
                            <div>
                                <b>Title:</b>
                                <Link to ={{
                                    pathname:'/favourite/'+ article.articleTitle,
                                    state:{
                                        articleDetail: article
                                    }
                                }}>
                                    {article.articleTitle}
                                </Link>
                            </div>
                            <div className="article-description"><b>Description:</b>{article.articleDescription}</div>
                            <div className="article-author"><b>Author:</b>{author}</div></td>
                    </div>
                </div>);
                output.push(row);
            }
            );
            this.setState({articleList:output, isLoaded:true})
        })       
    }
    public componentDidMount(){
        this.getArticles(); 
    }

    public render() {
        const output:any[]= this.state.articleList;
        let noFav;
        if(this.state.isLoaded===true && output.length===0){
                noFav=<div>No favourite articles</div>
        }
        return ( 
            <div className="articles-container">
                <h3>List of Favourited Articles</h3>
                {output}
                {noFav}
                <div className={this.state.isLoaded?'hide':'show'}>Loading....</div>
            </div>
         );
    }
}
 
export default FavouritePage;