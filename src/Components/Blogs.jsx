import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex items-center justify-between h-40 bg-purple-100">
          <img
            src="https://i.ibb.co/4V7V2m4/Vector.png"
            alt="Image 1"
            className="w-1/6 h-50 object-cover"
          />
          <img
            src="https://i.ibb.co/9vx46mz/Vector-1.png"
            alt="Image 2"
            className="w-1/6 mb-40 h-50 object-cover"
          />
        </div>
        <div className=" absolute inset-0 ">
          <div className="text-black">
            <h1 className="text-4xl font-bold text-center mt-8">Blog</h1>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-3  ">
          <div className="mt-5 p-5 bg-blue-300">
            <h1>Q1 : When should you use context API?</h1>
            <p>
              Ans : The Context API is a React structure that enables you to
              exchange unique details and assists in solving prop-drilling from
              all levels of your application .The Context API helps share data
              between components which you can't easily share with props.Context
              API in React should be used for sharing data across multiple
              components without prop drilling, in complex applications with
              many nested components or when multiple components need access to
              the same data. It should not replace local state or Redux.
            </p>
          </div>

          <div className="mt-5 p-5 bg-red-300">
            <h1>Q2 : What is a custom hook?</h1>
            <p>
              Ans : A custom hook is a special JavaScript function whose name
              starts with 'use' and can be used to call other hooks. They can
              also accept parameters and return values, just like regular
              functions.
            </p>
          </div>
          <div className="mt-5 p-5 bg-orange-300">
            <h1>Q3 : What is useRef?</h1>
            <p>
              Ans : In React, useRef is a hook that provides a way to create a
              mutable reference that can persist across re-renders of a
              component. The useRef hook returns a plain JavaScript object with
              a single property named current. You can modify the current
              property of the object directly and React will not re-render the
              component when it changes.
            </p>
          </div>
          <div className="mt-5 p-5 bg-green-300">
            <h1>Q4 : What is useMemo?</h1>

            <p>
              Ans : useMemo is a hook that is used for memoizing expensive
              computations so that they don't have to be recomputed on every
              render.useMemo takes two arguments: a function that returns a
              value, and an array of dependencies. The function will only be
              called when one of the dependencies changes. If the dependencies
              haven't changed since the last render, useMemo will return the
              cached value from the previous render.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
