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

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Talks />
    <Resume />
    <Skills />
    <Footer />
  </Layout>
);

export default IndexPage;
