import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import { Feed } from '@mui/icons-material';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App = () => {
 (
<BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
            <Route path="" exact element={ <Feed/>}/>
            <Route path="/video/:id" exact element={ <VideoDetail/>}/>
            <Route path="/channel/:id" exact element={ <ChannelDetail/>}/>
            <Route path="/search/:saerchTerm" exact element={ <SearchFeed/>}/>

        </Routes>

    </Box>
</BrowserRouter>
 )
}

export default App