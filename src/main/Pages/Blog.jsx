import React from 'react'
import BlogCard from '../Components/BlogCard';
import BlogApi from '../Api/BlogApi';

const Blog = () => {


  return (
    <>
      {/* <-- two sided blog part starts --> */}
      <div className="container-fluid">
        <div className="row">
          {/* <-- to get the space from left and right --> */}
          <div className="col-xl-10 col-lg-10 col-md-12 col-11 mx-auto my-5">
            <div className="row gx-5 mx-sm-auto">
              {/* <-- Blog Side  --> */}
              <div className="col-lg-8 col-md-11 col-11 mx-auto">
                <div className="row gy-5">

                  
              {/* <-- Blog Card render --> */}
                 {BlogApi.map((val, ind) => {
                  return <BlogCard key={ind} imgsrc={val.imgsrc} title={val.title} date={val.date} author={val.author} content={val.para1} smContent={val.para2}/>;
                })}
                  </div>
              </div>



              {/* <-- Side widgets--> */}
              <div className="col-lg-4 border side-stick">
                {/* <-- Search widget--> */}
                <div className="card mb-4">
                  <div className="card-header ">
                    <h3>Search</h3>
                  </div>
                  <div className="card-body bg-dark">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter search term..."
                        aria-label="Enter search term..."
                        aria-describedby="button-search"
                      />
                      <button
                        className="btn btn-primary"
                        id="button-search"
                        type="button"
                      >
                        Go!
                      </button>
                    </div>
                  </div>
                </div>

                {/* <-- Categories widget--> */}
                <div className="card mb-4">
                  <div className="card-header ">
                    <h3>Tags</h3>
                  </div>
                  <div className="tags_main right_sub__div card-body bg-dark">
                    <a href="/Blog" className="badge shadow text-capitalize">
                      html
                    </a>
                    <a href="/Blog" className="badge shadow text-capitalize">
                      CSS
                    </a>
                    <a href="/Blog" className="badge shadow text-capitalize">
                      Javascript
                    </a>
                    <a href="/Blog" className="badge shadow text-capitalize">
                      react
                    </a>
                    <a href="/Blog" className="badge shadow text-capitalize">
                      bootstrap
                    </a>
                    <a href="/Blog" className="badge shadow text-capitalize">
                      firebase
                    </a>
                  </div>
                </div>

                {/* <-- Social media widget--> */}
                <div className="card mb-4">
                  <div className="card-header ">
                    <h3>Connect Me</h3>
                  </div>
                  <div className="right_sub__div d-flex justify-content-around card-body">
                    <a href="https://github.com/Prajwal-raut" target="blank">
                      <i className="fab fa-3x fa-github-square"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/prajwalraut"
                      target="blank"
                    >
                      <i className="fab fa-3x fa-linkedin"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-3x fa-discord"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-3x fa-telegram"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-3x fa-twitter-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
