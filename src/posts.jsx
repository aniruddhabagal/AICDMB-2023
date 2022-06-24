import React, { Component } from 'react'
import { getPubs } from './data/postsData'
import Post from './post'
import Pagination from './pagination'
import { paginate } from "./util/paginate"

class Posts extends Component {
    state = { 
        posts: [],
        currentPage: 1,
        pageSize: 5,
        numberOfPages: 0,
    }

    componentDidMount() {
        this.setState({ posts: getPubs()});
    }


    paginatedPages = () => {
        const totalPosts = this.state.posts.length;
        const {posts, currentPage, pageSize} = this.state;
        const page = paginate(posts, currentPage, pageSize);
        return {page, totalPosts};
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };


    render() { 
        const {page, totalPosts: totalCount} = this.paginatedPages();
        const {pageSize, currentPage} = this.state;

        return (
            <div className="container">
                    <Post posts={page}/>
                    <Pagination 
                        itemsCount={totalCount} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
            </div>
        );
    }
}
 
export default Posts;