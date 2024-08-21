// User.jsx
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams();

  return (
    <div>
      
      <p>Username is {username}</p>
    </div>
  );
}

export default User;
