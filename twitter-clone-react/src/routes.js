import {  useRoutes } from 'react-router-dom';
import { useStateContext } from './contextProvider';
import Timeline from './Components/Main';
import SignInForm from './Components/SignInForm';
import EditProfileForm from './Components/EditProfileForm';
import Post from './Components/Post';
import RegistrationForm from './Components/RegistrationForm';
import Profile from './Components/Profile';

export default function Router() {

    const { isRegistered, isSignedIn } = useStateContext()
    const routes = [
      {
        path: '/',
        element: isSignedIn ? <Timeline />:  isRegistered ?<SignInForm /> : <RegistrationForm />
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [
            { path: 'edit', element: <EditProfileForm />}      
        ]
      },
      {
        path: '/post',
        element: <Post />
      }
      
    ];
  
  
    return useRoutes(routes);
  
  }
  