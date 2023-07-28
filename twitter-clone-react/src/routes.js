import {  useRoutes } from 'react-router-dom';
import { useStateContext } from './contextProvider';
import Timeline from './Components/Timeline';
import SignInForm from './Components/SignInForm';
import EditProfileForm from './Components/EditProfileForm';
import Post from './Components/Post';
import RegistrationForm from './Components/RegistrationForm';
import Profile from './Components/Profile';
import Home from './Components/Home';


export default function Router() {

    const { isRegistered, isSignedIn } = useStateContext()
    const routes = [
      {
        path: '/',
        element: isSignedIn ? <Home />:  isRegistered ?<SignInForm /> : <RegistrationForm />,
        children: [
            {
                path: '/',
                element: <Timeline />
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
        ]
      },
      
      
    ];
  
  
    return useRoutes(routes);
  
  }
  