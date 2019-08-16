import * as React from 'react';
import { Component } from 'react';
import {RouteComponentProps} from 'react-router';
import './Article.css';
import {Button} from 'react-bootstrap';

export interface IArticleState {
    "isAdded":any
}

export interface IArticleProps {
    "article":any
}

 
class Article extends Component<RouteComponentProps<IArticleProps>, IArticleState> {

    constructor(props:RouteComponentProps<IArticleProps>){
        super(props);
        this.state={
            "isAdded":false
        }
    }
    public handleFavourited=()=>{
        const {articleDetail} = this.props.location.state;
        const data = {
            "articleContent": articleDetail.content,
            "articleDescription": articleDetail.description,
            "articleTitle": articleDetail.title,
            "author":articleDetail.author,
            "isFavourite": true,
            "publishedDate": "2019-08-16T07:13:13.682Z",
            "thumbnailUrl": articleDetail.urlToImage,
            "webUrl": articleDetail.urlToImage,
        }
        fetch(`https://localhost:44379/api/Articles`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json());
        this.setState({"isAdded":true})
    }

    public render() { 
        const {articleDetail} = this.props.location.state;
        const isAdded = this.state.isAdded;
        const author=articleDetail.author===null?"N/A":articleDetail.author;
        let favouriteButton; 
        if(!isAdded){
            favouriteButton=<Button variant="link" onClick={this.handleFavourited}>Add to Favourite</Button>;
        }
        else{
            favouriteButton=<Button variant="link">Added</Button>;
        }

        return ( 
            <div>
                <div className="title-section">
                    <h3>
                        {articleDetail.title}
                    </h3>
                    {favouriteButton}
                </div>
                <div className="image-container">
                    <img src={articleDetail.urlToImage}/>
                </div>
                <div>
                <h4>
                    Author: {author}
                </h4>
                <h5>
                    Published at: {articleDetail.publishedAt}
                </h5>
                <div className="url-container">
                    <a href={articleDetail.url}>Read from the source</a>
                </div>
                </div>
                <div>
                    {articleDetail.content}
                </div>
            </div>
         );
    }
}
 
export default Article;