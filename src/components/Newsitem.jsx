import React from "react";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <>
    {/* <div className="container d-flex"> */}

   
      <div className="card d-inline-flex m-3 p-1" style={{ maxWidth: "340px",   overflow:"hidden"}}>
        <img src={src}  style={{objectFit:"cover"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5   className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text"> {description?description.slice(0,90):"This is all about the news where you get all the news about all the news all over the world news"}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Newsitem;
