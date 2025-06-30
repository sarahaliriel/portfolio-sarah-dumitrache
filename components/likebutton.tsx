"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(68);

  function toggleLike() {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setLiked(!liked);
  }

  return (
    <>
      <style>{`
        .like-button {
          position: relative;
          cursor: pointer;
          display: flex;
          height: 48px;
          width: 136px;
          border-radius: 16px;
          border: none;
          background-color:#49321F;
          overflow: hidden;
        }
        .like {
          width: 70%;
          height: 100%;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: space-evenly;
        }
        .like-icon {
          fill: #505050;
          height: 28px;
          width: 28px;
          transition: all 0.2s ease-out;
        }
        .like-text {
          color: #fcfcfc;
          font-size: 13px;
        }
        .like-count {
          position: absolute;
          right: 0;
          width: 30%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color:rgb(255, 255, 255);
          font-size: 13px;
          border-left: 2px solid #EAB897;
          transition: all 0.5s ease-out;
        }
        .like-count.two {
          transform: translateY(40px);
        }
        .liked .like-icon {
          fill: #fc4e4e;
          animation: enlarge 0.2s ease-out 1;
        }
        .liked .like-count.two {
          transform: translateX(0);
          color: #fcfcfc;
        }
        .liked .like-count.one {
          transform: translateY(-40px);
        }
        @keyframes enlarge {
          0% {
            transform: scale(0.5);
          }
          100% {
            transform: scale(1.2);
          }
        }
      `}</style>

      <div
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={toggleLike}
        role="button"
        aria-pressed={liked}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleLike()}
      >
        <label className="like" htmlFor="heart">
          <svg
            className="like-icon"
            fillRule="nonzero"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          <span className="like-text">Likes</span>
        </label>
        <span className="like-count one">{count - 9}</span>
        <span className="like-count two">{count}</span>
      </div>
    </>
  );
}
