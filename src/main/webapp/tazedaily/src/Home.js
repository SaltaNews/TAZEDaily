import ArticleSlides from "./ArticleSlides";
import Header from './Header';

const Home = () => {
    return(
        <div className="bg-light">
            <div className="container">
                <Header /> 
            </div>
            <ArticleSlides />
        </div>
    )
};

export default Home;