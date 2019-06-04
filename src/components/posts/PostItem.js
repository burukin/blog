/**
 * Created by agros on 03.06.2019.
 */
import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {deletePost} from '../../actions/post';

import PostFrom from './PostForm';

//Stateful component for displaying single post inside of a list
const PostItem  = ({post, showComments, deletePost, history}) => {

    //Variable for storing edit post mode status and method fot its updating
    const [updatePost, setUpdatePost] = useState(false);

    return (
        <div className="post bg-white p-1 my-1">

            {/*If edit mode is true show post form, else - show post and link of buttons*/}
            {updatePost ? <PostFrom post={post} updateMode={true} submitted={setUpdatePost}/> : (
                <Fragment>
                    <h4>{post.title}</h4>
                    <p className="my-1">
                        {post.body}
                    </p>

                    {/*If PostItem component is loaded from main page - show link to single post page*/}
                    {showComments ? (
                        <Link to={`/posts/${post.id}`} className="btn btn-primary">
                            Read More...
                        </Link>
                    ) : (
                        //If not - show edit and delete button
                        <Fragment>
                            <button className="btn btn-primary" onClick={() => setUpdatePost(true)}>
                                Edit Post
                            </button>
                            <button className="btn btn-danger" onClick={()=> deletePost(post.id, history)}>
                                Delete Post
                            </button>
                        </Fragment>
                    )}
                </Fragment>
            )}

        </div>
    );
};

PostItem.defaultProps = {
    showComments: true
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default connect(null, {deletePost})(withRouter(PostItem));