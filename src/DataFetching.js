import { useEffect, useState } from 'react';

export default function DataFetching() {
  const [userData, setUserData] = useState();
  const [userIsStale, setUserIsStale] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch('https://randomuser.me/api/');
      setUserData(await response.json());

      // Stop fetching of user
      setUserIsStale(false);
    }
    if (userIsStale) fetchUserData();
  }, [userIsStale]);

  if (!userData?.results) {
    return (
      <>
        Loading...
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }

  return (
    <>
      <h1>Fetching data using useEffect</h1>
      <img src={userData.results[0].picture.large} alt="" />
      <div>First name: {userData.results[0].name.first}</div>
      <div>Last name: {userData.results[0].name.last}</div>

      <button onClick={() => setUserIsStale(true)}>Get new random user</button>
    </>
  );
}
