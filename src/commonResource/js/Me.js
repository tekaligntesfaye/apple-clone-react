import React,{useState, useEffect} from 'react'

function Me() {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-07-31&sortBy=popularity&apiKey=0f7eab921efb47f7996484a1184f2faa")
        .then((res)=>res.json())
        .then((data)=>{
            const newsdata=data.articles;
            setNews(newsdata)
            
        })
    },[])
    // console.log(news)
  return (
    <div>
  {
    news?.map((el,i)=>{
    let wrapper = (
       <div key={i}>
        <h1>{i}&nbsp;&nbsp;{el.title}</h1>
       <div>
       <img src={el.urlToImage}></img>
       </div>
       </div>
        );
        return wrapper;
    })
    
  }
  
    </div>
  )
}

export default Me

