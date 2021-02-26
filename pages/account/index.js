import react, { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Link from "next/link";
import parser from "html-react-parser";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const Planets = () => {
  const [page, setPage] = useState(1);
  const fetchPanets = async (page) => {
    console.log(page);
    const result = await fetch(`/api/accounting?page=${page}`);
    return result.json();
  };

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(["projects", page], () => fetchPanets(page), {
    keepPreviousData: true,
  });

  return (
    <div>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 style={{ color: "white" }}>
                <a>Accounting Project Materials</a>
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
      <div className="about-box-main" name="top">
        <div className="container">
          <div className="container">
            <div className="post-heading"></div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <h2>
                {isLoading ? (
                  <div>Loading ....Data</div>
                ) : isError ? (
                  <div>Error: {error.message}</div>
                ) : isFetching ? (
                  <span> Loading...</span>
                ) : (
                  <div className="services-box-main">
                    <div className="container">
                      <div className="row ">
                        {data.map((document, index) => (
                          <div key={index} className="col-sm-12 col-lg-12">
                            <div key={index} className="service-block-inner">
                              <h4 className="service-title">
                                <Link
                                  key={index}
                                  className="list-group-item "
                                  href={`/account/${document._id}`}>
                                  <a>
                                    {parser(
                                      document.title.replace(/\n/gi, "<br />")
                                    )}
                                  </a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="container text-center">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="special-menu text-center">
                            <div className="button-group filter-button-group">
                              <button
                                href="#"
                                className="btn btn-danger"
                                onClick={() =>
                                  setPage((old) => Math.max(old - 1, 1))
                                }
                                disabled={page === 1}>
                                Previous Page
                              </button>{" "}
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  setPage((old) => old + 1);

                                  console.log(page);
                                }}
                                // Disable the Next Page button until we know a next page is available
                                disabled={isPreviousData}
                                href="javascript:void();">
                                Next Page
                              </button>
                            </div>
                            <br />
                            <br />
                            <button
                              href=""
                              disabled
                              className="btn btn-danger button-group filter-button-group">
                              Current Page: {page} 0f 81
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                )}
              </h2>
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

export default function Wraped() {
  return (
    <QueryClientProvider client={queryClient}>
      <Planets />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
