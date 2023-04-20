import { Store } from '../store';
import { useContext } from 'react';

const HomeScreen = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <div
      className="h-screen max-sm:h-full"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/living-room-interior-with-sofa-tv-apartment_107791-3226.jpg?w=1480&t=st=1681929064~exp=1681929664~hmac=646125431251253f0a479fda8bdf7a04dddb353ff903751c3c2df0da01533324)`,
        backdropFilter: 'blur(25px)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="flex flex-col space-y-2  text-center justify-center items-center text-3xl pt-2 text-black">
        Home <br />
        <button className="text-black focus:outline-none border rounded-lg p-1 shadow-lg bg-gray-500 px-2 flex flex-row">
          <span className="mr-2">
            {userInfo ? <>Authenticated</> : <>UnAuthenticated</>}
          </span>
        </button>
      </h1>
      <div className="p-6">
        <div className="flex flex-col max-w-md mx-auto my-6 p-6 border rounded shadow-lg text-2xl">
          Tasks Covered Here:
          <ul className="list-disc ml-4 text-white/80">
            <li>Authentication</li>
            <li>User DashBoard</li>
            <li>User Functionality</li>
            <li>Admin DashBoard</li>
            <li>Admin UserControl</li>
          </ul>
        </div>
        <div className="flex flex-col max-w-md mx-auto my-4 p-6 border rounded shadow-lg text-2xl">
          Easy To Use and work with:
          <ul className="list-disc ml-4 text-white/80">
            <li>Clone</li>
            <li>Edit</li>
            <li>Host</li>
            <li>Use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
