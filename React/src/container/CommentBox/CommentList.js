import React, { Fragment } from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  return (
    <Fragment>
      <div className="comment-list">
        {props.data &&
          props.data.map(function(item) {
            return <Comment item={item} />;
          })}
      </div>
    </Fragment>
  );
};

export default CommentList;
