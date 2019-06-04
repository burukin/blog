/**
 * Created by agros on 03.06.2019.
 */
import axios from 'axios';
import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    CREATE_COMMENT
} from './ActionTypes';

//Get list of posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('https://simple-blog-api.crew.red/posts');

        dispatch ({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message)
    }
};

//Get single posts
export const getPost = (id) => async dispatch => {
    try {
        const config = {
            params : {
                '_embed': 'comments'
            }
        };
        const res = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`, config);

        dispatch ({
            type: GET_POST,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};

//Create post
export const createPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('https://simple-blog-api.crew.red/posts', formData, config);

        dispatch ({
            type: CREATE_POST,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};

//Update post
export const updatePost = (formData, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.put(`https://simple-blog-api.crew.red/posts/${id}`, formData, config);

        dispatch ({
            type: UPDATE_POST,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};

//Delete posts
export const deletePost = (id, history) => async dispatch => {
    try {

        await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);

        dispatch ({
            type: DELETE_POST,
            payload: id
        });

        history.push('/');
    } catch (err) {
        console.error(err.message);
    }
};

//Create a comment
export const createComment = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('https://simple-blog-api.crew.red/comments', formData, config);

        dispatch ({
            type: CREATE_COMMENT,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};