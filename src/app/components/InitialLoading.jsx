"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";

const InitialLoadingAnimation = ({ contentRef }) => {
  const [isClient, setIsClient] = useState(false);
  const [showScreen, setShowScreen] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowScreen(false);
      document.body.style.overflow = "";
    }, 1000);
  };

  return (
    <>
      {showScreen && (
        <div
          className={`w-full h-full flex fixed top-0 left-0 bg-[#ebebeb] items-center justify-center z-[999] transition-opacity duration-2000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          id="loading-screen"
        >
          {isClient && (
            <Flex
              className="flex items-center justify-center md:w-[50%] md:h-full w-[100%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              id="loading-content"
            >
              <video
                autoPlay
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover pointer-events-none outline-none border-none"
                onEnded={handleVideoEnd}
              >
                <source
                  src="/videos/Nas Tech Logo Animation.mp4"
                  type="video/mp4"
                />
              </video>
            </Flex>
          )}
        </div>
      )}
    </>
  );
};

export default InitialLoadingAnimation;
