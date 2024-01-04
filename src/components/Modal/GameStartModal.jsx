import React from "react";
import XImg from "../../assets/images/x.svg";

export default function GameStartModal({ onClose }) {
  return (
    <>
      <article className="modal">
        <h1>안녕하세요</h1>
        <p className="intro">
          야구게임에 오신걸 환영합니다⚾
          <br />
          난이도를 선택하세요!
        </p>
        <ul>
          <li>
            <button>Easy</button>
          </li>
          <li>
            <button>Medium</button>
          </li>
          <li>
            <button>Hard</button>
          </li>
        </ul>
        <button>게임 설명</button>
        <button className="btn-close" type="button" onClick={onClose}>
          <img src={XImg} alt="모달 닫기" />
        </button>
      </article>
    </>
  );
}
