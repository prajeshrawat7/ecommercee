import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Product from './Product';
import Spinner from './Spinner';

const Categories = () => {
    const location = useLocation();

    const categoryMap = {
        "men's clothing": "men's-clothing",
        "women's clothing": "women's-clothing"
        // Add mappings for other categories as needed
      };
      
    //   const categoryName = location.pathname.split("/").at(-1);
    //   const formattedCategoryName = categoryMap[categoryName] || categoryName;
    //   const CATEGORY_FETCH_URL = `https://fakestoreapi.com/products/category/${formattedCategoryName}`;
      
const categoryName = location.pathname.split("/").at(-1);
    // const formattedCategoryName = categoryName.replace(/ /g, "-");
    // const formattedCategoryName = encodeURIComponent(categoryName);
    console.log(categoryName ,  "categoryName")
    const formattedCategoryName = categoryName.replace("-", "%20");

    const CATEGORY_FETCH_URL = `https://fakestoreapi.com/products/category/${formattedCategoryName}`;


    const [categories , setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    async function categoryFetching(){
        setLoading(true);
        try{
            const res = await fetch(CATEGORY_FETCH_URL);
      const data = await res.json();
    //   console.log("category hai ye" , data[0].category)
    //   setCategory(data);
      setCategories(data);
      

        }
        catch(error){
            console.log(error);

        }
        setLoading(false);
    }

    useEffect(()=>{
        categoryFetching();

    } , [categoryName])

  return (
    <div>

{
        loading ? <Spinner />  :
        categories.length > 0 ? 
        // categories[0].category == categoryName  ? 
        (<div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            categories.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }

    </div>
  )
}

export default Categories