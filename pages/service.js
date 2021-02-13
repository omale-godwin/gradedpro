import React from 'react';
import Link from 'next/link';

export default function Service() {
    return (
        <div className="page-services">
    

      <div className='container-fluid mx-auto mt-5 mb-5 col-12' style={{textAlign: 'center'}}>

    <h2 className="hd service-desc">Why Students Believe in Us</h2>
    <p><small className="text-muted">We Always render more and better service than <br />is expected of Us, no matter what your ask may be.</small></p>
    <div className="row" style={{justifyContent: 'center'}}>
        <div className="card col-md-3 col-12">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div className="shadow"></div>
                    <div className="card-title"> Find Or Request Source Code Of Any WebApp or mobile App With Chapter 1-5 Docx </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your need</small> </p>
                        <Link href="/source" className="serbtn btn btn-primary">Source Code</Link>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                    <div className="card-title">  </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">  </small> </p>
                        <Link href="/contacts" className="serbtn btn btn-primary"><a>Make Enquiry</a></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <h4 className="card-title"> Hire A Writer</h4>
                    <div className="card-subtitle">
                        <p> <small className="text-muted service-desc">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <Link href="/hirewriter" className="serbtn btn-primary btn btn-primary">Hire A Writer</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="row" style={{justifyContent: 'center'}}>
        <div className="card col-md-3 col-12">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div className="shadow"></div>
                    <div className="card-title"> Paraphrasing Tool (project Rewriter)</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your need</small> </p>
                        <button className="serbtn btn btn-primary">Rewrite Text</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                    <div className="card-title"> Request Any Department or Course Project Topic Material
 </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data href match you who the best person for each job </small> </p>
                        <Link href="/request" className="serbtn btn btn-primary">Make Request</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div className="card-title"> Make Money Online Selling Project Materials</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <button className="serbtn btn btn-primary">Sell Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="ft">
        <p className="chk"><small className="text-muted">Still not sure?</small></p>
        <Link href="/" className="btn btn-primary">View All Department Project</Link>
    </div>
</div>
    </div>

        )
}
