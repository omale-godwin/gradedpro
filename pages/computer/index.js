// import dbConnect from "../../components/connection/database";
// import comput from "../../files/computer_sciences.json";

// import parser from "html-react-parser";

// import React, { useState } from "react";
// import Link from "next/link";

// const AccountingLi = ({ res }) => {
//   function singlepage(e, title) {
//     console.log(e);
//     // navigate(`/computer/ComputerPosts?title=${title}&id=${e}`)
//   }
//   return (
//     <div>
//       <div className="all-title-box">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <h2>COMPUTER SCIENCE PROJECT TOPICS AND MATERIALS</h2>
//               <ul className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <a href="#">ARCHITECHTURE</a>
//                 </li>
//                 <li className="breadcrumb-item active">PROJECT TOPICS LISTS</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="services-box-main">
//         <div className="container">
//           <div className="row ">
//             {res.map((document, index) => (
//               <div key={index} className="col-sm-12 col-lg-12">
//                 <div key={index} className="service-block-inner">
//                   <h4 className="service-title">
//                     <a
//                       href={`/${document.id}`}
//                       key={index}
//                       onClick={(e) => singlepage(index, document.title)}>
//                       {parser(document.title)}
//                     </a>
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col text-center"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AccountingLi;

// export async function getServerSideProps(context) {
//   const res = await comput;

//   return {
//     props: {
//       res,
//     },
//   };
// }

import React from "react";

export default function Computer() {
  return <div></div>;
}
