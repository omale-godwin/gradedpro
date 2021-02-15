import dbConnect from '../components/connection/database';
import AccountingModel from '../components/models/accounting';

import InfiniteScroll from 'react-infinite-scroll-component';

import React, {useState} from 'react'
import Link from 'next/link';


const AccountLists = ({posts}) => {
  const [page, setPge] = useState(0)
    return (
        <div>
                <div className="all-title-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>ACCOUNTING PROJECT TOPICS AND MATERIALS</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">ACCOUNTING</a></li>
                        <li className="breadcrumb-item active">PROJECT TOPICS LISTS</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="wishlist-box-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="strip">
      <div className="container pt-6 pb-6 pb-md-10">
        <div className="row justify-content-start">

        <ul>
       <InfiniteScroll dataLength={posts.length}  next={()=> setPge(page + 1)}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }>
            {posts.map((document, index) => ( 
 
              <div key={index} className="list-group" >
                <li key={index}>
               <ul>
                 <li  style={{listStyleType: "none", color: "red"}}>
                  <h4 >
                  <Link key={index } onClick={(e) =>console.log(document._id)} className="list-group-item " href={`${document._id}`}>{document.title}</Link>
 
                  </h4>
                  </li>
                  </ul>
                </li>
              </div>
            ))}
             </InfiniteScroll>
          </ul>
        </div>
      </div>
    </div>

    
                    </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default AccountLists


export async function getStaticProps(context) {
  let networkErr;
  let posts;
  try {
    await dbConnect();
  } catch (err) {
    networkErr = "there was an error connecting to the database";
  }

  if (!networkErr) {
    posts = await AccountingModel.find({}).limit(100);
  

    posts = JSON.parse(JSON.stringify(posts));

  }
  return {
    props: {
      posts,
    },
  };
}