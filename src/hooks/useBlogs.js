import {useMemo} from "react";

export const useSortedBlogs=(blogs,sort)=>{


    const sortedBlogs = useMemo(()=>{
        if (sort) {
            return [...blogs].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return blogs
    }, [sort, blogs])
    return sortedBlogs
}
export  const useBlogs=(blogs, sort, query)=>{
    const sortedBlogs= useSortedBlogs(blogs, sort)
    const  sortedAndSearchedBlogs= useMemo(()=>{
        return sortedBlogs.filter(blog=> blog.title.toLowerCase().includes(query) )
    }, [query, sortedBlogs])
    return sortedAndSearchedBlogs
}
