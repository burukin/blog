/**
 * Created by agros on 03.06.2019.
 */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost, updatePost} from '../../actions/post';

//Stateful component for form displaying.
//Has two modes for post creation and post updating. Depends on value of updateMode.
const PostForm = ({createPost, updatePost, post, updateMode, submitted}) => {

    //Variable for storing data from from and method from its updating
    //Initial value is taken from post props
    const [formData, setFormData] = useState({
        title: post.title,
        body: post.body
    });

    const onChangeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    //Method for post adding or updating
    const onFormSubmit = e => {
        e.preventDefault();
        if (updateMode) {
            updatePost(formData, post.id);
            submitted(false);
        } else {
            createPost(formData);
            setFormData({
                title: '',
                body: ''
            });
        }
    };

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Say Something...</h3>
            </div>
            <form className="form my-1" onSubmit={ (e)=> onFormSubmit(e)}>
                <div className="form-group">
                    <input type="text" name="title" value={formData.title} placeholder="Input a title" onChange={(e) => onChangeHandler(e)} required/>
                </div>
                <div className="form-group">
                    <textarea name="body" cols="30" rows="5" placeholder="Create a post" value={formData.body} onChange={(e) => onChangeHandler(e)} required></textarea>
                </div>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    );
};

PostForm.defaultProps = {
    post: {
        title: '',
        body: ''
    },
    updateMode: false
};

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    post: PropTypes.object
};

export default connect(null, {createPost, updatePost})(PostForm);