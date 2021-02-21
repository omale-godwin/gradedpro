import React, { useState, useEffect } from "react";
import parser from "html-react-parser";
import comput from "../files/computer_sciences.json";
import Head from "next/head";
import Link from "next/link";

<Head>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
  />
</Head>;
const Computersingle = ({ res }) => {
  useEffect(() => {
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
      />
    </Head>;
  });
  return (
    <div>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 style={{ color: "white" }}>
                <a>{parser(comput[res].title || "hmmm...")}</a>
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
                <p>
                  {parser(
                    comput[res].content.replace(/\n/gi, "<br />") || "hmmm..."
                  )}
                </p>
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

export default Computersingle;

export async function getServerSideProps(context) {
  const res = context.params.computer;

  console.log(res);
  return {
    props: {
      res,
    },
  };
}
