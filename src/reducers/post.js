/**
 * Created by agros on 03.06.2019.
 */
import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    CREATE_COMMENT
} from '../actions/ActionTypes';

const initialState = {
    posts: [],
    post: null,
    loading: true
};


export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            };
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, payload],
                loading: false
            };
        case UPDATE_POST: {
            return {
                ...state,
                post: {
                    ...payload,
                    comments: [...state.post.comments]
                },
                loading: false
            }
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== payload),
                loading: false
            };
        case CREATE_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: [...state.post.comments, payload],
                    loading: false
                }
            };
        default:
            return state;
    }
}