import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '../Utils/fetchData'
import Details from '../component/Details';
import ExerciseVideos from '../component/ExerciseVideos';
import SimilarExercises from '../component/SimilarExercises';



const ExerciseDetails = () => {

      const [exerciseDetails, setExerciseDetails] = useState({})
      const [exerciseVideos, setExerciseVideos] = useState([]);
      const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
      const [equipmentExercises, setEquipmentExercises] = useState([]);
      const { id } = useParams();

      useEffect(() => {
            const fetchexerciseData = async () => {
                  const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
                  const youtubeUrl = `https://youtube-search-and-download.p.rapidapi.com`

                  const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
                  setExerciseDetails(exerciseDetailData)

                  const exerciseVideosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
                  setExerciseVideos(exerciseVideosData.contents);

                  const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
                  setTargetMuscleExercises(targetMuscleExercisesData);

                  const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
                  setEquipmentExercises(equimentExercisesData);
            }

            fetchexerciseData();

      }, [id])


      return (
            <Box>

                  <Details exerciseDetails={exerciseDetails} />
                  <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
                  <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
            </Box>
      );
};

export default ExerciseDetails;