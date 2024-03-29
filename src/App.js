import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import Header from './hocs/Header'

import Welcome from './Components/Welcome';
import Company from './Components/Company';
import Services from './Components/Services';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';

const App = () => (
    <Router>
        <Layout>
        <Header>
            <Routes>
                <Route path="/" element={<Welcome />}></Route>
                <Route exact path='/company' element={<Company />}></Route>
                <Route exact path='/services' element={<Services/>}></Route>
                <Route exact path='/certifications' element={<Certifications/>}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
            </Routes>
        </Header>
        </Layout>

    </Router>
);
export default App;
