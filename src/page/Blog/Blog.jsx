import Post from "components/Post/Post";
import React from "react";
import "./Blog.scss";

const Blog = () => {
  return (
    <main>
      <div className="container">
        <h1 className="title">блог</h1>
        <div className="new-post">
          <div className="new-post__content">
            <span className="post__data">10 февраля 2023</span>
            <div className="post__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <div className="new-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, et sit! Voluptates esse, ab laborum repellat atque
              tempore aspernatur, quaerat omnis voluptas distinctio deleniti
              dolores neque velit sapiente. Porro maiores architecto id facere
              doloribus. Incidunt soluta asperiores sit itaque atque officia sed
              quam saepe?
            </div>
            <a href="#" className="post__link">
              Читать пост
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1931 6.21541H0.953125V7.73541H15.1931L10.7131 13.0954L11.9131 13.8154L16.5531 8.29541C17.1931 7.57541 17.1931 6.37541 16.5531 5.65541L12.0731 0.29541L10.8731 1.01541L15.1931 6.21541Z"
                  fill="#222222"
                />
              </svg>
            </a>
          </div>
          <div className="new-post__image">
            <img src="https://i.ibb.co/CBdLzQF/Instagram-post-6.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="posts container">
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </main>
  );
};
export default Blog;
