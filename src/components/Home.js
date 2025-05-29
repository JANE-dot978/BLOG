import BlogList from "./BlogList";

import useFetch from "./useFetch";

const Home =() =>{
    const {data}=useFetch('http://localhost:4000/blogs');
    return(
        <div className="home">
            <h1>all blog</h1>
            {data && <BlogList blogs={data} title="All blogs"/>}

        </div>
    )
}
export default Home;