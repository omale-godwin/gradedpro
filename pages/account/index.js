import dbConnect from "../../components/connection/database";

import parser from "html-react-parser";

import React, { useState } from "react";
import Link from "next/link";

const AccountingLi = ({ posts }) => {
  const [isPreview, setIsPreview] = useState(1);
  const [count, setCount] = useState(0);
  function loadmore() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>ACCOUNTING PROJECT TOPICS AND MATERIALS</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">ARCHITECHTURE</a>
                </li>
                <li className="breadcrumb-item active">PROJECT TOPICS LISTS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="services-box-main">
        <div className="container">
          <div className="row ">
            {posts.map((document, index) => (
              <div key={index} className="col-sm-12 col-lg-12">
                <div key={index} className="service-block-inner">
                  <h4 className="service-title">
                    <Link
                      key={index}
                      className="list-group-item "
                      href={`/account/${document._id}`}>
                      <a>{parser(document.title)}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountingLi;

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/accounting");
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
