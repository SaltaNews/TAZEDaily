import axios from 'axios';
import React, {useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import comment from '../images/comment.png';
import moment from 'moment';

const PopulateArticles = (props) => {
    const [articles, setArticles] = useState([])

    const url = "http://127.0.0.1:8080/newsarticle/genre/" + props.category;

    useEffect(() => {
        fetchArticles()
    })

    /** get articles from REST API */
    const fetchArticles = async () => {
        const res = await axios.get(url)
        setArticles(res.data)
    }


    /** split articles into three columns */
    const firstArticles = articles.splice(0,3).map((article) => {
    const hoverFocus = ['hover', 'focus']
    const popover = (
        <Popover width="1000px" height="200px">
            <Popover.Body>
                <img src={ article.image } alt="article" width="100%"/>
            </Popover.Body>
        </Popover>
    );

    const likesClick = async () => {
        try {
            const updatedArticle = await axios.put(`http://localhost:8080/newsarticle/update/${article.id}`);
            article.setLikes(updatedArticle.data.likes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Accordion.Item eventKey={article.id}>
            <Accordion.Header id="accordion-button">
                <OverlayTrigger className="text-truncate" trigger={hoverFocus} placement="top" overlay={ popover }>
                    {/* <strong>{article.snip}</strong> */}
                    <strong>{article.title}</strong>
                </OverlayTrigger>
            </Accordion.Header>
            <Accordion.Body>
                <p><h6>{article.title}</h6></p>
                <p>{article.article}</p>
                <p>{article.author} / {moment(article.date).utc().format('MMM DD, YYYY')}</p>
                <p>{article.genre}</p>
                <p>Full article:<a href="/fullarticle" articleId={article.id}> Read More</a></p>
                <p>Source:<a href={article.source}> NY Times</a></p>
                <p>
                <button onClick = {likesClick} style={{height: '28px', width : '30px' , color: "blue", marginleft: '30px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="4 0 16 20">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                </svg>
                </button>
                <span>{article.likes} Likes </span>
                    <p>
                    <img src={comment} alt="comment" width="40" height="40" viewBox="0 0 16 16"/>
                    </p>
                </p>
            </Accordion.Body>
        </Accordion.Item>
    )
    })

    /** split articles into three columns */
    const secondArticles = articles.splice(0,3).map((article) => {
    const hoverFocus = ['hover', 'focus']
    const popover = (
        <Popover width="1000px" height="200px">
            <Popover.Body>
                <img src={ article.image } alt="article" width="100%"/>
            </Popover.Body>
        </Popover>
    );

    /** clickable like button */
    const likesClick = async () => {
        try {
            const updatedArticle = await axios.put(`http://localhost:8080/newsarticle/update/${article.id}`);
            article.setLikes(updatedArticle.data.likes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Accordion.Item eventKey={article.id}>
        <Accordion.Header id="accordion-button">
            <OverlayTrigger className="text-truncate" trigger={hoverFocus} placement="top" overlay={ popover }>
            {/* <strong>{article.snip}</strong> */}
            <strong>{article.title}</strong>
            </OverlayTrigger>
        </Accordion.Header>
        <Accordion.Body>
            <p><h6>{article.title}</h6></p>
            <p>{article.article}</p>
            <p>{article.author} / {moment(article.date).utc().format('MMM DD, YYYY')}</p>
            <p>{article.genre}</p>
            <p>Full article:<a href="/fullarticle"> Read More</a></p>
            <p>Source:<a href={article.source}> NY Times</a></p>
            <p>
                <button onClick = {likesClick} style={{height: '28px', width : '30px' , color: "blue", marginleft: '30px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="4 0 16 20">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                </svg>
                </button>
                <span>{article.likes} Likes </span>
                    <p>
                    <img src={comment} alt="comment" width="40" height="40" viewBox="0 0 16 16"/>
                    </p>
                </p>
        </Accordion.Body>
        </Accordion.Item>
    )
    })

    /** split articles into three columns */
    const thirdArticles = articles.splice(0,3).map((article) => {
    const hoverFocus = ['hover', 'focus']
    const popover = (
        <Popover width="1000px" height="200px">
            <Popover.Body>
                <img src={ article.image } alt="article" width="100%"/>
            </Popover.Body>
        </Popover>
    );

    /** clickable like button */
    const likesClick = async () => {
        try {
            const updatedArticle = await axios.put(`http://localhost:8080/newsarticle/update/${article.id}`);
            article.setLikes(updatedArticle.data.likes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Accordion.Item eventKey={article.id}>
            <Accordion.Header id="accordion-button" className="text-truncate">
                <OverlayTrigger trigger={hoverFocus} placement="top" overlay={ popover }>
                    {/* <strong>{article.snip}</strong> */}
                    <strong>{article.title}</strong>
                </OverlayTrigger>
            </Accordion.Header>
            <Accordion.Body>
                <p><h6>{article.snip}</h6></p>
                    <p>{article.article}</p>
                    <p>{article.author} / {moment(article.date).utc().format('MMM DD, YYYY')}</p>
                    <p>{article.genre}</p>
                    <p>Full article:<a href="/fullarticle"> Read More</a>
                </p>
                <p>Source:<a href={article.source}> NY Times</a></p>
                <p>
                <button onClick = {likesClick} style={{height: '28px', width : '30px' , color: "blue", marginleft: '30px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="4 0 16 20">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                </svg>
                </button>
                <span>{article.likes} Likes </span>
                    <p>
                        <img src={comment} alt="comment" width="40" height="40" viewBox="0 0 16 16"/>
                    </p>
                </p>
            </Accordion.Body>
        </Accordion.Item>
        )
    })

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-4 p-1 mb-2">
                    <Accordion flush>
                        { firstArticles }
                    </Accordion>
                </div>
                <div className="col-4 p-1 mb-2">
                    <Accordion flush>
                        { secondArticles }
                    </Accordion>
                </div>
                <div className="col-3 p-1 mb-2">
                    <Accordion flush>
                        { thirdArticles }
                    </Accordion>
                </div>
            </div>
        </div>
    )
}


export default PopulateArticles;
