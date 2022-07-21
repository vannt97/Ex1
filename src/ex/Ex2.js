import React, { useRef, useState } from "react";

export default function Ex2() {
  let refInput = useRef();
  const [numbersBlock, setNumberBlock] = useState(0);
  const renderBlocks = () => {
    let html = [];
    for (let i = 0; i < numbersBlock; i++) {
      html.push(<div key={i} className="block"></div>);
    }
    // console.log(html);
    return html;
  };
  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          refInput.current = e.target.value;
        }}
      />
      <button
        onClick={() => {
          setNumberBlock(Number(refInput.current));
        }}
      >
        Nhap
      </button>
      <br />
      <br />
      <div className="row">{renderBlocks()}</div>
    </>
  );
}
