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
        this.setState({"isAdded":true})
    }
    public handleUnfavourited=()=>{
        this.setState({"isAdded":false})
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
            favouriteButton=<Button variant="link" onClick={this.handleUnfavourited}>Undo</Button>;
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