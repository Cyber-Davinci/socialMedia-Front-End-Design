import React,{useState} from 'react';
import {Box, Stack, Skeleton} from '@mui/material';
import Post from './Post'

function Feed() {
    const [loading, setLoading] = useState(false)
  return (
    <Box flex={4} p={{xs:2, md:2}}>
        {loading ? (
            <Stack>
                <Skeleton variant='text' height={100}/>
                <Skeleton variant='text' height={20}/>
                <Skeleton variant='text' height={20}/>
                <Skeleton variant='rectangular' height={300}/>
                <Skeleton variant='text' height={50}/>
                <Skeleton variant='rectangular' height={300}/>
                <Skeleton variant='text' height={100}/>
                <Skeleton variant='text' height={100}/>
            </Stack>
        ) : (
            <>
                <Post title="Ebrahim" avatarLetter='E'/>
                <Post title="Ndimz" avatarLetter='N'/>
                <Post title='OneNyass' avatarLetter='O'/>
                <Post title="Davinci" avatarLetter='D'/>
                <Post title="Warrior" avatarLetter='W'/>
                <Post title="Ugliest" avatarLetter='U'/>
                <Post title="Admin" avatarLetter='A'/>
            </>
        )}
    </Box>
  )
}

export default Feed