/** Load Database with NY Times API */
  // const [term, setTerm] = useState('everything')
  // useEffect(() => {
  //   const fetchArticles = async () => {
  //   try{
  //       const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
  //       const articles = await res.json()
  //       // console.log(articles.response.docs)
  //       setArticles(articles.response.docs)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  //   fetchArticles()
  // }, [])

  // const REACT_APP_ARTICLESEARCH_API_KEY = '1kZSoFSlY109zEMAjDOfogdE32rPiSVT';
// const App = () => {
// const [articles, setArticles] = useState([])
// const [term, setTerm] = useState('everything')
// const [isLoading, setIsLoading] = useState(true)

// useEffect(() => {
//   const fetchArticles = async() => {
// try {
    // const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}s&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
//     const articles = await res.json()
//     setArticles(articles.response.docs)
//     console.log(articles);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // useEffect(() => {
// //   axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}s&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
// //   .then((response) => {
// //     console.log(response)
// //     setArticles(response.data)
// //   })
// // },[])

// fetchArticles()
// }, [])