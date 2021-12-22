import React, { useState, useEffect } from "react";

const BlogCard = (props) => {
  // get the data from Local Storage
  const getLocalItmes = () => {
    let list = localStorage.getItem("lists");
    // console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  // hooks
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItmes());

  // add items
  const addItem = () => {
    if (!inputData) {
      alert("plzz fill data");
      setInputData("");
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        comment: inputData,
        time: new Date().toLocaleDateString(),
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  // comment toogle button
  const [show, showData] = useState(false);

  // Like button changed
  const [Name, updateName] = useState("Like");
  const newName = () => {
    updateName("Liked");
  };

  return (
    <>
      <div className="col-12 card p-4 shadow-card blog_left__div">
        <div
          className="
               d-flex
               justify-content-center
               align-items-center
               flex-column
               pt-3
               pb-5
             "
        >
          <h1 className="text-uppercase">{props.title}</h1>
          <p className="blog_title">
            Posted on&nbsp;
            <span className="badge bg-dark">{props.date}</span>
            &nbsp;by {props.author}
          </p>
        </div>
        <figure className="right_side_img mb-5">
          <img src={props.imgsrc} alt="blgimg" className="img-fluid shadow" />
        </figure>
        <p></p>
        <p className="f-size">{props.content}</p>
        <p className="f-size">{props.smContent}</p>
        <div className="d-flex justify-content-between left_div_btns">
          <div>
            <button
              className="left_div__like btn btn-primary"
              id="like_btn"
              onClick={newName}
            >
              <i className="fa fa-thumbs-up"></i> {Name}
            </button>
          </div>
          <div>
            <button
              onClick={() => showData(!show)}
              className="left_div__reply btn btn-primary"
            >
              <i className="far fa-comment-dots"></i> Comment
            </button>
          </div>
        </div>

        {/* <!-- Comments section--> */}
        {
          // comment toggle
          show ? (
            <section className="mb-5 my-3">
              <div className="card bg-light">
                <div className="card-body">
                  {/* <!-- Comment form--> */}
                  <form className="mb-4">
                    <section id="main">
                      <div className="child-div">
                        <div className="addItems">
                          <input
                            type="text"
                            className="form-control"
                            rows="3"
                            placeholder="Join the discussion and leave a comment!"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                          />
                          <i
                            className="fas fa-plus co-icon "
                            title=" Add Comment"
                            onClick={addItem}
                          ></i>
                        </div>
                      </div>
                    </section>
                  </form>
                  {/* use map method to render User Comment */}
                  {items.map((elem, index) => {
                    return (
                      <div className="d-flex mb-4" key={index}>
                        <div className="flex-shrink-0">
                          <span className="fas fa-user-circle"></span>
                        </div>
                        <div className="ms-3">
                          <div className="fw-bold">Anonymous Id: {elem.id}</div>
                          {elem.comment}
                          <div className="text-secondary ">
                            Comment on {elem.time}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null
        }
      </div>
    </>
  );
};

export default BlogCard;
