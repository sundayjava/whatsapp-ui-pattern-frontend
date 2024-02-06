import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar: React.FC<{
  index: number;
  activeIndex: number;
  duration: number;
}> = (props) => {
  const isActive = props.index === props.activeIndex;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev: any) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(intervalId);
        return prev;
      });
    }, props.duration / 100);
  }, [props.duration, props.activeIndex]);

  useEffect(() => {
    setProgress(0);
  }, [props.activeIndex]);

  return (
    <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
      <div
        className={`${isActive ? "progress-bar" : ""}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
