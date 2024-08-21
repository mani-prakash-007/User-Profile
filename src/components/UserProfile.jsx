import React, { useState } from "react";

export const UserProfile = ({
  userName,
  userId,
  userEmail,
  userPhone,
  userCity,
  userWebsite,
}) => {
  //States
  const [showBio, setShowBio] = useState(false);
  //Function
  const handleClick = () => {
    showBio ? setShowBio(false) : setShowBio(true);
  };
  return (
    <div className="w-96 my-5">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleClick}
          className="border border-black my-5 p-1 rounded-lg hover:text-white hover:bg-black active:scale-95"
        >
          Show Details
        </button>
      </div>
      {showBio && (
        <div className=" border border-black h-72 p-5">
          <h1 className="font-bold text-xl text-center">User Details</h1>
          <p className="m-3">
            <strong> Name : </strong>
            <span>{userName}</span>
          </p>
          <p className="m-3">
            <strong> userId : </strong>
            <span>{userId}</span>
          </p>
          <p className="m-3">
            <strong> Email : </strong>
            <span>{userEmail}</span>
          </p>
          <p className="m-3">
            <strong> Phone : </strong>
            <span>{userPhone}</span>
          </p>
          <p className="m-3">
            <strong> City : </strong>
            <span>{userCity}</span>
          </p>
          <p className="m-3">
            <strong> Website : </strong>
            <span>
              <a href={userWebsite} className="italic underline text-sky-600">
                {userWebsite}
              </a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
