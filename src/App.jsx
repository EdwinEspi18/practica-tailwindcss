import { Fragment, useState } from "react";
import netflixLogo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className='bg-[url("./BG.jpg")] bg-no-repeat bg-cover h-screen '>
      <header className='bg-black bg-opacity-50 h-14 dark:text-slate-300 w-full flex justify-between items-center px-3'>
        <div className='flex items-center cursor-pointer no-underline'>
          <a className='flex items-center tracking-wide font-bold whitespace-nowrap'>
            <img
              className='inline-block w-24 sm:w-32'
              src={netflixLogo}
              alt='Netflix logo'
            />
            TOP 10
          </a>
          <div className='pl-4'>
            <button className='text-white font-bold dark:text-gray-400 hover:underline'>
              <span>Search</span>
              <svg
                viewBox='0 0 24 24'
                height='16'
                fill='white'
                className='inline-block ml-1'
              >
                <path
                  fillRule='evenodd'
                  d='M11 17a6 6 0 100-12 6 6 0 000 12zm-6.56.162a8.975 8.975 0 005.898 2.814 8.974 8.974 0 005.877-1.64l3.724 3.725.354-.354 1.414-1.414.354-.354-3.725-3.724a8.974 8.974 0 001.64-5.877A9 9 0 0011 2a9 9 0 00-6.56 15.162z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav className='flex items-center'>
          <ul className='flex flex-shrink pr-3 space-x-3'>
            <li>
              <a className='underline font-bold hover:text-slate-200' href='#'>
                English
              </a>
              <span className='px-2'>•</span>
              <a className='underline font-bold hover:text-slate-200' href='#'>
                Español
              </a>
            </li>
            <li>|</li>
            <li>
              <a className='underline' href='#'>
                <span className='font-bold'>About</span>
                <svg
                  viewBox='0 0 24 24'
                  fill='white'
                  height='16'
                  className='inline-block ml-1'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path
                    fillRule='evenodd'
                    d='M18 20H4V6h10V4H2v18h18V10h-2v10z'
                  ></path>
                  <path
                    fillRule='evenodd'
                    d='M16 0v2h4.59L9.29 13.29l1.42 1.42L22 3.41V8h2V0h-8z'
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='flex flex-col items-center justify-evenly h-3/6 bg-black bg-opacity-50 w-full'>
        <h1 className='font-display text-7xl text-gray-50'>Global Top 10</h1>
        <div className='flex flex-col items-center'>
          <p className='text-gray-300'>
            Weekly Top 10 lists of the most-watched TV and films.
          </p>
          <a className='underline text-red-600' href='#'>
            Or, see Top 10 lists by country
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
