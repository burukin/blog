/**
 * Created by agros on 03.06.2019.
 */
import React from 'react';
import PropTypes from 'prop-types';

//Stateless component for single comment displaying
const Comment = ({comment}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <p className="my-1">
                {comment.body}
            </p>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired
};


export default Comment;