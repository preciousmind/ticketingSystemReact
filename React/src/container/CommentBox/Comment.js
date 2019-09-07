import React, { Fragment } from 'react';
import moment from 'moment'

const Comment=(props)=> {
    const {author, text, date} = props.item
        return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <strong>{author}</strong> <span className="text-muted">commented {moment(date, "YYYYMMDD").fromNow()}</span>
                            </div>
                            <div className="panel-body">
                                {text}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

}

export default Comment