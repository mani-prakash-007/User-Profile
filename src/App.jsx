import { useEffect, useState } from "react";
import { UserProfile } from "./components/UserProfile";
function App() {
  //States
  const [userDetails, setUserDetails] = useState({
    name: "",
    id: "",
    email: "",
    phone: "",
    city: "",
    website: "",
  });

  //Side Effects
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userData = await response.json();
        setUserDetails({
          name: userData.name,
          id: userData.username,
          email: userData.email,
          phone: userData.phone,
          city: userData.address.city,
          website: userData.website,
        });
      } catch (error) {
        alert("Can't fetch User Data...!!!");
      }
    };
    fetchUserData();
  }, []);
  return (
    <>
      <div>
        <h1 className="font-bold bg-black text-white text-center text-2xl p-4">
          User Profile
        </h1>
        <div className="flex justify-center">
          <UserProfile
            userName={userDetails.name}
            userId={userDetails.id}
            userEmail={userDetails.email}
            userPhone={userDetails.phone}
            userCity={userDetails.city}
            userWebsite={userDetails.website}
          />
        </div>
      </div>
    </>
  );
}

export default App;
