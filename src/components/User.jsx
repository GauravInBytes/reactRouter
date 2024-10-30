import { useParams } from "react-router-dom";

const User = () => {
    const {id} = useParams();
  return (
    <div className="bg-gray-600 text-white text-xl p-4 text-center">
      user: {id}
    </div>
  )
};

export default User;
