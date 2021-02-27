import dbConnect from "../components/connection/database";
import AccountingModel from "../components/models/accounting";

import React, { useState } from "react";
import Link from "next/link";

const AccountLists = ({ posts }) => {
  const [page, setPge] = useState(0);
  return (
    <div>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>ACCOUNTING PROJECT TOPICS AND MATERIALS</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">ACCOUNTING</a>
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
                      href={`${document._id}`}>
                      <a>{document.title}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <button
                onClick={loadmore}
                style={{ fontSize: "34px", color: "red" }}
                class="btn btn-default b">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountLists;

function loadmore() {
  console.log("conneting");
}

export async function getStaticProps(context) {
  let networkErr;
  let posts;
  try {
    await dbConnect();
  } catch (err) {
    networkErr = "there was an error connecting to the database";
  }

  if (!networkErr) {
    posts = await AccountingModel.find({}).limit(250);

    posts = JSON.parse(JSON.stringify(posts));
  }
  return {
    props: {
      posts,
    },
  };
}
