/**
 * Created by agros on 03.06.2019.
 */
import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getPost, createComment} from '../../actions/post';

import PostItem from '../posts/PostItem';
import Comment from '../post/Comment';
import Spinner from '../layout/Spinner';

//Stateful component for displaying single post
const SinglePost = ({getPost, post:{post, loading}, match, createComment}) => {

    //Loading posts bi id
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost]);

    //Variable for storing data from comment creation form and method fot its updating
    const [formData, setFormData] = useState({
        postId: match.params.id,
        body: ''
    });

    //Handler for form input
    const onChangeHandler = e => {
        setFormData({...formData, body: e.target.value})
    };

    //Handler for form submit
    const onFormSubmit = e => {
        e.preventDefault();
        createComment(formData);
        setFormData({...formData, body: ''});
    };

    return (

        //If loading = true of no post  - show spinner
        loading || post === null ? <Spinner/> : (
            <Fragment>
                <Link className="btn btn-light my-1" to='/'>Go Back</Link>

                <PostItem post={post} showComments={false} />

                <div className="comments">
                    <h4>Comments</h4>
                    {post.comments.map(comment => {
                        return (
                            <Comment comment={comment} key={comment.id}/>
                        );
                    })}

                    <div className="post-form">
                        <div className="bg-primary p">
                            <h4>Leave your comment...</h4>
                        </div>
                        <form className="form my-1" onSubmit={ (e)=> onFormSubmit(e)}>
                            <div className="form-group">
                                <textarea name="body" cols="30" rows="5" placeholder="Leave your comment" value={formData.body} onChange={(e) => onChangeHandler(e)} required></textarea>
                            </div>
                            <input type="submit" className="btn btn-dark my-1" value="Submit" />
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    );
};

SinglePost.propTypes = {
    getPost: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        post: state.post
    }
};

export default connect(mapStateToProps, {getPost, createComment})(SinglePost);