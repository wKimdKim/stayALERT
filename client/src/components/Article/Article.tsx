import * as React from 'react';
import { Component } from 'react';
import {RouteComponentProps} from 'react-router';
import './Article.css';
import {Button} from 'react-bootstrap';
import {ajax} from 'rxjs/ajax';
import {map} from 'rxjs/operators';

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
            "ArticleContent": articleDetail.content,
            "ArticleDescription": articleDetail.description,
            "ArticleTitle": articleDetail.title,
            "Author":articleDetail.author,
            "isFavourite": true,
            "PublishedDate": "2019-08-16T07:13:13.682Z",
            "ThumbnailURL": articleDetail.urlToImage,
            "WebUrl": articleDetail.url,
        };
        ajax.post('https://localhost:44379/api/Articles', data).pipe(
            map(resp=>this.setState({"isAdded":true}))
        )
        // console.log('helo');
    //     fetch('https://localhost:44379/api/Articles',{
    //         method: 'POST',
    //         headers:{
    //             'Content-Type':'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     .then(resp=>this.setState({"isAdded":true}));
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