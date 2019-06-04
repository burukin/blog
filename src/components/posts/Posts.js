/**
 * Created by agros on 03.06.2019.
 */
import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import Spinner from '../../components/layout/Spinner';

import PostItem from './PostItem';
import PostForm from './PostForm';

//Stateful component for displaying list of posts
const Posts = ({post:{posts, loading}, getPosts}) => {

    //Loading list of posts
    useEffect(()=> {
        getPosts();
    }, [getPosts]);

    return (
        //It loading = true and no posts - show spinner
        loading && posts.length === 0 ? <Spinner /> : (
            <Fragment>
                <h1 className="large text-primary">Welcome to my simple blog</h1>
                <PostForm />
                <p className="lead"><i className="fas fa-user"></i> List Of Posts</p>
                {posts.map(post => {
                    return <PostItem key={post.id} post={post} />
                })}
            </Fragment>
        )
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    post: state.post
});

export default connect(mapStateToProps, {getPosts})(Posts);