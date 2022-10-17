import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import { useState } from 'react';

const navItems = [
  {href:"#workshop",label:"Home"},
  {href:"#about-us",label:"About us"},
  {href:"#featured-posts",label:"Featured posts"},
  
]
const headerTitle = "Hello World !!!";
const aboutTitle = "About us";
const aboutParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore quam porro magnam recusandae fugiat neque sit inventore ea dicta ipsam facilis veniam obcaecati fugit deserunt est minus, nulla sequi. Cumque doloribus temporibus fugit aliquid odio quia consectetur animi neque delectus dicta inventore, numquam, assumenda nam ratione magni aliquam distinctio? Provident, consequuntur magnam id accusamus iusto sunt"
const featuredTitle = "Featured posts";
const articles = ["Article 1","Article 2","Article 3","Article 4","Article 5"]

function App() {
  const [navTitle, setNavTitle] = useState("Workshop");
  return (
    <div className="App">
      <Navbar title={navTitle} navElements={navItems} />
      <Header onClick={()=>setNavTitle("Welcome to React")} h1={headerTitle} />
      <main>
        <Section paragraph={aboutParagraph} h2={aboutTitle} />
        <Section isFeatured h2={featuredTitle} articles={articles} />
        <Footer footerText="© 2022 wilders" />
      </main>
    </div>
  );
}

export default App;
