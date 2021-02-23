import React from "react";
import parser from "html-react-parser";

const AccountingSinglec = ({ post }) => {
  const { title, content } = post;
  return (
    <div>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 style={{ color: "white" }}>
                <a>{parser(title || "hmmm...")}</a>
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
                <p>{parser(content || "hmmm...")}</p>
              </h4>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                {" "}
                <img
                  className="img-thumbnail img-fluid"
                  src="images/about-img.jpg"
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

export default AccountingSinglec;

export async function getStaticPaths() {
  const posts = (await import("../../files/accountings.json")).default;

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const posts = (await import("../../files/accountings.json")).default;
  const idy = context.params.id;
  const post = posts[idy - 1];

  return {
    props: {
      post,
    },
  };
}
22328187852;
