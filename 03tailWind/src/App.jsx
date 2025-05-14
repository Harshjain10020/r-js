import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../component/cards";

function App() {
  const [count, setCount] = useState(0);
  let myOBj = {
    username: "Harsh",
    age: 23,
  };
  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-700 text-black p-4 mb-4 rounded-xl">
        Tailwind Test
      </h1>

      {/* <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div> */}

      {/* <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    <div className="sm:order-last sm:shrink-0">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        className="size-16 rounded-full object-cover sm:size-[72px]"
      />
    </div>

    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg font-medium text-pretty text-gray-900">
        How I built my first website with Nuxt, Tailwind CSS and Vercel
      </h3>

      <p className="mt-1 text-sm text-gray-700">By John Doe</p>

      <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
        maiores deleniti consectetur nobis et eaque.
      </p>
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div className="flex items-center gap-2">
      <dt className="text-gray-700">
        <span className="sr-only"> Published on </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      </dt>

      <dd className="text-xs text-gray-700">31/06/2025</dd>
    </div>

    <div className="flex items-center gap-2">
      <dt className="text-gray-700">
        <span className="sr-only"> Reading time </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
      </dt>

      <dd className="text-xs text-gray-700">12 minutes</dd>
    </div>
  </dl>
</a> */}
      {/* <Card username="Harsh" myArr = {[1,2,3,4]} mySomeobj = {{ ...myOBj, newArr }} newsome = {newArr} /> */}
      <Card username="Harsh" btnText="click  m e"/>
      <Card username="Tanu" btnText=""/>
    </>
  );
}

export default App;
