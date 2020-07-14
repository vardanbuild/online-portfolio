import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Talks from '../sections/Talks';
import Resume from '../sections/Resume';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Talks />
    <Certifications />
    <Skills />
    <Resume />
    <Footer />
  </Layout>
);

export default IndexPage;
