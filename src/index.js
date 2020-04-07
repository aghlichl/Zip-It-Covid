import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const buttonText = "click me";
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Ari" timeAgo="6:32pm" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Pari" timeAgo="2:51pm" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Fatollah" timeAgo="6:12am" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Ida" timeAgo="1:11am" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
