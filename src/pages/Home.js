import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../component/HeroBanner';
import SearchExercises from "../component/SearchExercises"
import Exercises from "../component/Exercises"


const Home = () => {

      const [bodyPart, setBodyPart] = useState('all')
      const [exercises, setExercises] = useState([])
      
      return (
            <Box>

                  <HeroBanner/>

                  <SearchExercises 
                  setExercises={setExercises} 
                  bodyPart={bodyPart} 
                  setBodyPart={setBodyPart}/>

                  <Exercises
                  exercises={exercises}
                  setExercises={setExercises} 
                  bodyPart={bodyPart} 
                  />

            </Box>
      );
};

export default Home;