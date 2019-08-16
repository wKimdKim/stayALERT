import * as React from 'react';
import { Component } from 'react';
import {RouteComponentProps} from 'react-router';
import './Article.css';
import {Button} from 'react-bootstrap';

export interface IFavouriteArticleProps {
    "article":any
}

 
class FavouriteArticle extends Component<RouteComponentProps<IFavouriteArticleProps>, {}> {

    public constructor(props:RouteComponentProps<IFavouriteArticleProps>){
        super(props);
    }

    public render() { 
        const {articleDetail} = this.props.location.state;
        const author=articleDetail.author===null?"N/A":articleDetail.author;
        const deleteFavourite=()=>{
            fetch('https://localhost:44379/api/Articles/'+articleDetail.articleId,{
                method:'DELETE'
            })
        }
        const deleteButton =<Button className="delete" variant="link" onClick={deleteFavourite}>Delete</Button>;

        return ( 
            <div>
                <div className="title-section">
                    <h3>
                        {articleDetail.articleTitle}
                    </h3>
                    {deleteButton}
                </div>
                <div className="image-container">
                    <img src={articleDetail.thumbnailUrl}/>
                </div>
                <div>
                <h4>
                    Author: {author}
                </h4>
                <h5>
                    Published at: {articleDetail.publishedDate}
                </h5>
                <div className="url-container">
                    <a href={articleDetail.webUrl}>Read from the source</a>
                </div>
                </div>
                <div>
                    {articleDetail.articleContent}
                </div>
            </div>
         );
    }
}
 
export default FavouriteArticle;