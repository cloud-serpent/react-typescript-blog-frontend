import React from 'react';

interface DeleteProps {
  id: string;
}
export const Delete: React.FC<DeleteProps> = ({ id }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 19 19"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      id={id}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <title>icon/18/icon-delete</title> <desc>Created with Sketch.</desc>{' '}
        <defs> </defs>{' '}
        <g
          id="out"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {' '}
          <path
            d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z"
            id={id}
            fill="#000000"
          >
            {' '}
          </path>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};
