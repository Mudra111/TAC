import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Item from "./slider2-com";
import Subslider1 from "./subslider1";
import "./subslider2.css";
import profilepic from "./Images/profile-pic.png";

export default function Insta() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20"
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, []);

  console.log(items);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;
    const commentsFromServer = await fetchComments(currentPage);

    setItems(commentsFromServer);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="row row-cols-4">
        {items.map((item) => {
          return (
            <div className="col">
              <Item>
                <Subslider1 />
                <div>
                  <div className="profile-name-container">
                    <a href="#" className="profile-np">
                      <img src={profilepic} alt="" className="profile-pic" />
                      <p className="profile-name"> {item.id} </p>
                    </a>
                  </div>
                  <div className="profile-statement">
                    <a href="#">
                      <p className="statement-content"> {item.email} </p>
                    </a>
                  </div>
                  <div className="rating">
                    <div>
                      <span>
                        <b>&#9733;</b>
                      </span>{" "}
                      Ratings
                    </div>
                  </div>
                  <hr />
                  <div className="price-container">
                    <div className="like-button">
                      <a href="#">
                        <span className="like-sym">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-list"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                          </svg>
                        </span>
                        <span className="like-sym">&#10084;</span>
                      </a>
                    </div>
                    <div className="price-content">
                      <a href="#">
                        Starting at
                        <br />
                        <span>&#8377;</span> Price
                      </a>
                    </div>
                  </div>
                </div>
              </Item>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={15}
        breakLabel={"-"}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        onPageChange={handlePageClick}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}
