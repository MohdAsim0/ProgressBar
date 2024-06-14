import { useEffect } from "react";
import { useState } from "react";

function Progress({ value = 0,onComplete=()=>{}}) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if(value>=100){
        onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span
        style={{
          color: percent > 49 ? "white" : "black",
        }}
      >
        {percent.toFixed()}%
      </span>
      {/* <div style={{ width: `${percent}%` }}></div> */}
      <div  style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left"
        }}></div>
    </div>
  );
}

export default Progress;
