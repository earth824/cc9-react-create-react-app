import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  // const { state } = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome back !!. you have {location.state?.point} points</p>
      {/* <p>Welcome back !!. you have {state ?? state.point} points</p> */}
    </div>
  );
}

export default Home;
