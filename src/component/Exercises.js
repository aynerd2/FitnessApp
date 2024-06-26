import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Typography, Stack} from "@mui/material"
import { exerciseOptions, fetchData } from '../Utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {

      // console.log(exercises, "exercises")

      const [currentPage, setCurrentPage] = useState(1)
      const exercisesPerpage = 9;

      const indexoflastExercise = currentPage * exercisesPerpage;
      const indexofirstExercise = indexoflastExercise -  exercisesPerpage;

      // const currentExercises = exercises.slice(indexofirstExercise, indexoflastExercise)
      const currentExercises =
      exercises && exercises.length
        ? exercises.slice(indexofirstExercise, indexoflastExercise)
        : [];
  

      const paginate = (e, value) =>{
            setCurrentPage(value);
            window.scrollTo({top: 1800, behavior: 'smooth'})
      }


      // useEffect(() => {
       
      //       const fetchexerciseData = async ()=>{
      //       let exerciseData = []

      //       if (bodyPart === 'all'){

      //             exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', 
      //             exerciseOptions);
      //       } else{
                  
      //             exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, 
      //             exerciseOptions);
      //       }
      //       setExercises(exerciseData)

      //       }
        
      //       fetchexerciseData()
      // }, [bodyPart])
      

      useEffect(() => {
            const fetchExerciseData = async () => {
              let exerciseData = [];
        
              try {
                if (bodyPart === 'all') {
                  exerciseData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions
                  );
                } else {
                  exerciseData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions
                  );
                }
                setExercises(exerciseData);
              } catch (error) {
                console.error('Error fetching exercise data:', error);
              }
            };
        
            fetchExerciseData();
          }, [bodyPart, setExercises]);

      return (
            <Box
            id="exercises"
            sx={{mt: {lg: '110px'}}}
            mt='50px'
            p='20px'
            >

               <Typography variant='h3' mb='46px'>
                  Showing Result
               </Typography>

               <Stack direction='row' 
               sx={{gap: {lg: '110px', xs: '50px'}}} 
               flexWrap='wrap' 
               justifyContent='center'>

                  {currentExercises.map((exercise, index)=>(
                        <ExerciseCard key={index} exercise={exercise}/>
                  ))}

               </Stack>

               <Stack mt='100px' alignItems='center'>
                  {exercises.length > 9 && (
                        <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length /  exercisesPerpage)}
                        page={currentPage}
                        onChange={paginate}
                        size='large'
                        />
                  )}

               </Stack>

            </Box>
      );
};

export default Exercises;