import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Trailing effect
      });
    };

    // Check if the screen width is greater than 768px (desktop view)
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
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
