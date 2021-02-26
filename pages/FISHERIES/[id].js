import React from "react";
import dbConnect from "../../components/connection/database";
import FISHERIESModel from "../../components/models/FISHERIES";
import parser from "html-react-parser";

const FISHERIES = ({ post }) => {
  return (
    <div>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 style={{ color: "white" }}>
                <a>{parser(post[0].title || "hmmm...")}</a>
              </h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">ABSTRACT</a>
                </li>
                <li className="breadcrumb-item active">DETAILS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about-box-main">
        <div className="container">
          <div className="container">
            <div className="post-heading"></div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4>
                {" "}
                <p>{parser(post[0].content || "hmmm...")}</p>
              </h4>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                {" "}
                <img
                  className="img-thumbnail img-fluid"
                  src="/public/images/about-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FISHERIES;

export async function getServerSideProps(context) {
  await dbConnect();

  let post = await FISHERIESModel.find({ _id: context.params.id });
  post = JSON.parse(JSON.stringify(post));
  console.log(post);

  return {
    props: {
      post,
    },
  };
}
