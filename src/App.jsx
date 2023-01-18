import { Fragment, useState } from "react";
import netflixLogo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className='bg-[url("./BG.jpg")] bg-repeat-y md:bg-repeat-x bg-contain h-screen'>
      <div className='backdrop-blur-sm'>
        <header className='relative bg-black bg-opacity-50 h-14 dark:text-slate-300 w-full flex justify-between items-center px-3'>
          <div className='flex items-center cursor-pointer no-underline'>
            <a className='flex items-center text-gray-300 tracking-wide text-xs md:text-base font-medium whitespace-nowrap'>
              <img
                className='inline-block w-24 sm:w-32 md:w-40'
                src={netflixLogo}
                alt='Netflix logo'
              />
              TOP 10
            </a>
            <div className='pl-4 absolute right-5 top-11 md:left-56 md:top-4'>
              <button className='text-white font-bold dark:text-gray-400 hover:underline'>
                <span className='text-xs md:text-base text-gray-400'>
                  Buscar
                </span>
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
          <nav className='flex items-center text-gray-100'>
            <ul className='flex flex-shrink pr-3 space-x-3 text-xs md:text-lg'>
              <li>
                <a className='underline font-bold hover:text-gray-600' href='#'>
                  English
                </a>
                <span className='px-2'>•</span>
                <a className='underline font-bold hover:text-gray-600' href='#'>
                  Español
                </a>
              </li>
              <li className='hidden md:block'>|</li>
              <li className='hidden md:block'>
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
        <main className='flex flex-col gap-2 md:gap-16 h-screen items-center justify-around bg-black bg-opacity-50 w-full'>
          <div className='flex flex-col items-center gap-1 md:gap-14'>
            <h1 className='font-display tracking-widest md:tracking-normal font-semibold text-4xl md:text-7xl xl:text-8xl text-gray-50'>
              Top 10 global
            </h1>
            <div className='flex flex-col gap-2 items-center'>
              <p className='text-gray-300 text-center'>
                Listas semanales del Top 10 de películas y TV más vistos.
              </p>
              <a className='underline text-red-600' href='#'>
                Aquí puedes ver las listas Top 10 por país
              </a>
            </div>
          </div>
          <div className='mt-10'>
            <h2 className='text-white'>Lista de las peliculas (PROCESO)</h2>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
