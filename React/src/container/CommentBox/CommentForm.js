import React, { Fragment } from "react";
import { Col, Input } from "reactstrap";
import { useSelector } from "react-redux";
import moment from 'moment'

const CommentForm = (props) => {

  const { fullName } = useSelector(
    state => state.dashboard.userData
  );

  const handleSubmit = e => {
    e.preventDefault();
    var textVal = e.target[0].value.trim();
    if (!textVal) {
      return;
    }
    props.onCommentSubmit({ author: fullName, text: textVal, date: moment().format() });
    e.target[0].value = "";
    e.target[1].value = "";
    return;
  };

  return (
    <Fragment>
      <form className="comment-form form-group" onSubmit={handleSubmit}>
        <div sm={12} row className="input-group">
          <Col sm={1}>
            <span className="input-group-addon">Comment</span>
          </Col>
          <Col sm={11}>
            <Input type="textarea" name="text" />
          </Col>
        </div>
        <div className="col-12 text-center cmt-btn">
          <input
            type="submit"
            className="center-block btn btn-primary"
            value="Comment"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default CommentForm;
