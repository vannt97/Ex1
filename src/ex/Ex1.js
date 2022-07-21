import React, { useEffect, useRef, useState } from "react";
import { useSpring, useSprings, animated } from "react-spring";
export default function Ex1() {
  const distanceRef = useRef(100);
  const numbersCircleRef = useRef();

  //   const styles = useSpring({
  //     loop: true,
  //     // delay: 3000,
  //     config: { duration: 3000 },
  //     to: { transform: "rotate(360deg) translate(100px)" },
  //     from: { transform: "rotate(0deg) translate(100px)" },
  //   });
  //   const [styles, api] = useSpring(() => ({
  //     loop: true,
  //     config: { duration: 3000 },
  //     to: { transform: "rotate(360deg) translate(100px)" },
  //     from: { transform: "rotate(0deg) translate(100px)" },
  //   }));
  const [numbersCircle, setNumbersCircle] = useState(Array(1).fill(""));
  const [propsAniamtionUseSprings, api] = useSprings(
    numbersCircle.length,
    (index) => {
      let numberDeg = Math.floor(Math.random() * 361);
      return {
        loop: true,
        config: { duration: 3000 },
        to: {
          transform: `rotate(${numberDeg}deg) translate(${distanceRef.current}px)`,
        },
        from: {
          transform: `rotate(-${360 - numberDeg}deg) translate(${
            distanceRef.current
          }px)`,
        },
      };
    }
  );

  return (
    <div
      className=""
      style={{
        position: "absolute",
        height: "100%",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "blue",
        overflow: "hidden",
      }}
    >
      <div>
        <label>Nhập khoảng cách</label>
        <input
          type="number"
          onChange={(e) => {
            distanceRef.current = Number(e.target.value);
          }}
        />
        <button
          onClick={() => {
            api.start((index) => {
              let numberDeg = Math.floor(Math.random() * 361);
              return {
                loop: true,
                to: {
                  transform: `rotate(${numberDeg}deg) translate(${distanceRef.current}px)`,
                },
                from: {
                  transform: `rotate(-${360 - numberDeg}deg) translate(${
                    distanceRef.current
                  }px)`,
                },
              };
            });
          }}
        >
          Nhập
        </button>
      </div>
      <div>
        <label>Nhập số hình tròn</label>
        <input
          type="number"
          onChange={(e) => {
            numbersCircleRef.current = Number(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // console.log(numbersCircleRef.current);
            setNumbersCircle(Array(numbersCircleRef.current).fill(""));
          }}
        >
          Nhập
        </button>
      </div>

      <div className="tieuDiem">
        {propsAniamtionUseSprings.map((item, index) => {
          return (
            <animated.div
              // onDrag={(e) => {
              //   console.log(e);
              // }}
              className="circle"
              style={item}
              key={index}
            ></animated.div>
          );
        })}
        {/* <animated.div className="circle" style={styles}></animated.div> */}
        {/* <div className="circle"></div> */}
        {/* <div className="circle1"></div> */}
      </div>
    </div>
  );
}
