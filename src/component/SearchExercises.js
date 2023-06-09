import React, {useEffect, useState} from 'react';
import {Box, Stack, TextField, Button, Typography} from "@mui/material"
import {exerciseOptions, fetchData} from "../Utils/fetchData"
import HorizontalScrollbar from '../component/HorizontalScrollbar'


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

      const [search, setSearch] = useState("")
      const [bodyParts, setBodyParts] = useState([])

      useEffect(() => {
       
            const fetchExerciseData = async () =>{
                  const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
                  setBodyParts(['all', ...bodyPartsData])
            }

            fetchExerciseData()

      }, [])
      



      const handleSearch = async () =>{

      if (search){
      const exercisedata = await fetchData('https://exercisedb.p.rapidapi.com/exercises', 
      exerciseOptions);
           
                  const searchExercises = exercisedata.filter(
                        (exercise) =>  exercise.name.toLowerCase().includes(search)
                        || exercise.target.toLowerCase().includes(search)
                        || exercise.equipment.toLowerCase().includes(search)
                        || exercise.bodyPart.toLowerCase().includes(search)
                  );

                  setSearch('')
                  setExercises(searchExercises)

                  console.log(exercisedata, "exercisedata")

            }

            
            
      }

      return (
            <Stack 
            alignItems="center"
            justifyContent="center" 
            mt="37px"
            p="20px">
                  
            <Typography
            fontWeight={700}
            sx={{
                  fontSize: { lg: "44px", xs: "30px"}
            }}
            mb="50px" textAlign="center"
            >
                  Awesome Exercises You <br/> Should know
            </Typography>

            <Box position="relative" mb="72px">
                  <TextField
                  sx={{
                        input: {
                              fontWeight: "700",
                              borderRadius: "4px",
                              border: "none"
                        },

                        width: {lg: "800px", xs: "350px"},
                        backgroundColor: "#FFF",
                        borderRadius: "40px"
                  }}
                  height="76px"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                  placeholder="Search Exercises" 
                  type="text"
                  />

                  <Button 
                  className='search-btn'
                  sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: {lg: "175px", xs: "80px"},
                        fontSize: {lg: "20px", xs: "14px"},
                        height: "56px",
                        position: "absolute",
                        right: "0"
                  }}
                  onClick={handleSearch}
                  >
                        Search
                  </Button>
            </Box>

            <Box sx={{position: 'relative', width: '100%', p: "20px"}}>

                  <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isbodyParts/>
            </Box>


            </Stack>
      );
};

export default SearchExercises;