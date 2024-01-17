import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data);
        })
    },[])
    return (
        <div className="bg-white py-10 md:py-20 px-4 md:px-20">
            <h2 className="text-center text-2xl md:text-3xl text-black font-semibold">Popular Articles</h2>
            <div className="md:grid grid-cols-2 mt-8 gap-10">
                {
                    blogs.map(blog=><div key={blog._id} className="flex flex-col-reverse md:flex-row items-center gap-6 p-6 text-justify text-gray-800 shadow-xl drop-shadow-xl">
                        <div className="">
                            <h3 className="md:text-lg  text-black  font-bold mb-6"><a href="">{blog.title}</a></h3>
                            <p className="text-xs md:text-sm">{blog.description.slice(0,140)}...</p>
                        </div>
                        <img className="w-full md:w-36 md:h-36" src={blog?.image?.url} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;