import React from "react";

const Blogs = () => {
  return (
    <div>
      <div class="relative">
        <div class="flex items-center justify-between h-40 bg-purple-100">
          <img
            src="https://i.ibb.co/4V7V2m4/Vector.png"
            alt="Image 1"
            class="w-1/6 h-50 object-cover"
          />
          <img
            src="https://i.ibb.co/9vx46mz/Vector-1.png"
            alt="Image 2"
            class="w-1/6 mb-40 h-50 object-cover"
          />
        </div>
        <div class=" absolute inset-0 ">
          <div class="text-black">
            <h1 class="text-4xl font-bold text-center mt-8">Blog</h1>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-3  ">
          <div className="mt-5 py-5 px-3 bg-blue-300">
            <h1>Q1:When should you use context API?</h1>
            <p></p>
          </div>

          <div className="mt-5 bg-red-300">
            <h1>Q2: What is a custom hook?</h1>
            <p></p>
          </div>
          <div className="mt-5 bg-orange-300">
            <h1>Q3:What is useRef?</h1>
            <p></p>
          </div>
          <div className="mt-5  bg-green-300">
            <h1>Q4:What is useMemo?</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
