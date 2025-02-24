/**
 * Created by agros on 04.06.2019.
 */
import React , {Fragment} from 'react';

//Page Not Found
const NotFound = () => {
    return (
        <Fragment>
            <h1 className="x-large text-primary">
                <i className="fas fa-exclamation-triangle">{'  '}
                    Page Not Found
                </i>
            </h1>
            <p className="large">
                Sorry, this page does not exist.
            </p>
        </Fragment>
    );
};

export default NotFound;