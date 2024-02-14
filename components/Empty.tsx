import Image from "next/image";
import React from "react";

const Empty = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        className=""
        src="/images/order-bg.png"
        width={100}
        height={100}
        alt="Empty cart"
      />
    </div>
  );
};

export default Empty;
