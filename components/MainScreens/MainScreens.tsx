import React from 'react';

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectNav } from '../../reducers/navToggleSlice';

//Screens
import Home from '../Screens/Home';
import Work from '../Screens/Work';
import Projects from '../Screens/Projects';

const MainScreens = () => {
  const value = useSelector(selectNav);
  return (
    <div className='flex w-full'>
      {value === 'home' && <Home/>}
      {value === 'work' && <Work/>}
      {value === 'projects' && <Projects/>}
    </div>
  )
}

export default MainScreens