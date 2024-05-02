import React from "react";
import { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
// import useAxiosFetch from "../hooks/useAxiosFetch";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${date.getDate()} ${month} ${year}`;
};

const Blog = () => {
    const [blog,setBlog] = useState([])
    const [blogList,setBlogList] = useState([])
    // const {data, fetchError, isLoading} = useAxiosFetch('https://dev-blog-api.myamberinnovations.com/blog/getLatestBlog')
    // useEffect(()=>{
    //     setBlog({data})
    // },[data])
    //  console.log(data)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://dev-blog-api.myamberinnovations.com/blog/getLatestBlog');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        // Assuming the response format is { response: [...] }
        setBlog(data.data); // Access the array from the response key
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    const fetchBlogList = async () => {
      try {
        const response = await fetch('https://dev-blog-api.myamberinnovations.com/blog?page=1&limit=5');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        // Assuming the response format is { response: [...] }
        setBlogList(data.data); // Access the array from the response key
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogList();
  }, []); // Empty dependency array ensures the effect runs only once on component mount


    return(
        <div>
            <h1 className="text-3xl font-bold underline">
            <div className="flex">
                  {/* {isLoading && <p>Loading Blog....</p>}
                  {!isLoading && fetchError && <p>{fetchError}</p>}
                  {!isLoading && !fetchError && blog.map((post)=>(
                      <div key={post._id}>
                          {post.blogTitle}
                      </div>
                  ))} */}
                  {
                      blog.map((post)=>(
                          <div key={post._id} >
                            <p>{post.blogTitle}</p> 
                            <h6>{post.user.userName}</h6>
                            <p>{formatDate(post.createdOn)}</p>
                            {post.fileFormate === 'image' && <img src={post.imageUrl} alt="blog" />}
                            {post.fileFormate === 'video' && <video src={post.videoUrl} controls />}
                            <p>{ReactHtmlParser(post.description)}</p>
                          </div>
                      ))
                  }

            </div>
            <div className="blogList">
                  {
                    blogList.map((list)=>(
                        <ul key={list._id}>
                          <li>
                              <p>{list.blogTitle}</p>
                          </li>
                        </ul>
                    ))
                  }
            </div>
            </h1>
        </div>
    )
}

export default Blog