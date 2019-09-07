import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

import "./styles.scss";

var commentData = [
  {
    text: "I've heard it both ways"
  },
  {
    text: "You hear about Pluto? That's messed up"
  }
];

const CommentBox = props => {
  const { comments } = useSelector(state => state.dashboard.getRow);

  const handleCommentSubmit = comment => {
    var newComments = comments.concat([comment]);    
    props.update(newComments);
  };

  return (
    <Fragment>
      <div sm={12} row className="comment-box">
        <CommentForm data={comments} onCommentSubmit={handleCommentSubmit} />
        <CommentList data={comments} />
      </div>
    </Fragment>
  );
};

export default CommentBox;
