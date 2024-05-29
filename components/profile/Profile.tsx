// import React, { useState } from 'react';
// import { User } from '../types/user';

// const Profile: React.FC = () => {
//   const [user, setUser] = useState<User>({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     bio: 'A short bio about John Doe.',
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleEditToggle = () => {
//     setIsEditing((prevIsEditing) => !prevIsEditing);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       <h2>Profile</h2>
//       {isEditing ? (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Bio:</label>
//             <textarea
//               name="bio"
//               value={user.bio}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Save</button>
//         </form>
//       ) : (
//         <div>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Bio:</strong> {user.bio}</p>
//           <button onClick={handleEditToggle}>Edit Profile</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
