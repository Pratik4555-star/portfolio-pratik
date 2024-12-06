import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  // const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      // gsap.to(cursor, {
      //   x: e.clientX,
      //   y: e.clientY,
      //   duration: 0,
      // });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Trailing effect
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          backgroundColor: "white",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      /> */}
      <div
        ref={followerRef}
        style={{
          backgroundColor: "aliceblue",
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          border: "2px solid #000",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default CustomCursor;


/* height: 20px;
    width: 20px;
    background-color: aliceblue;
    border-radius: 50%;
    position:fixed;
    font-size: 6px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    z-index: 9; */