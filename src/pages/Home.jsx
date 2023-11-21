import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { NavLink } from "react-router-dom";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const CATEGORY_URL ='https://fakestoreapi.com/products/categories';
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories , setCategories] = useState([]);

  async function fetchCategoriesList() {
    try{
      const res = await fetch(CATEGORY_URL);
      const data = await res.json();
      setCategories(data);

    }
    catch(error){
      console.log("Error aagya ji");
      setCategories([]);
      
    }
  }

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchCategoriesList()
    fetchProductData();
  },[])

  return (
    <div>

      <div className="categories max-w-6xl mx-auto p-2 mt-8" >
        <ul className="flex justify-evenly capitalize">

       {
         categories.map((category)=>(
           <NavLink to={`/product/category/${category.replaceAll(" ", "-")}`}><li className="bg-yellow-300 px-3 py-1 rounded-md hover:bg-yellow-400 hover:text-white transition-all duration-200">{category}</li></NavLink>
           ))
          }

          </ul>
      </div>

      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
