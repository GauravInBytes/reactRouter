import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
  return (
    <div className="bg-gray-600 text-white text-xl p-4 text-center">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="gaurav" height="200" width="200" />
    </div>
  )
};

export default Github;

// Fast refresh only works when a file only exports components. Use a new file to share constants
// or functions between components.
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/GauravInBytes');
  const data = await response.json();
  return data;
}
