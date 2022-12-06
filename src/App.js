//import ClassComponent from './Class Component'
/*import FuncProps from  './FuncProps'
import StateExample from './StateExample'
import DemoExample from './DemoExample'
import Events from './Events'
import JSX from './JSX'*/
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
function App(){
  return(
      <div>
         <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact"element={<Contact/>}/>
           <Route path="*"element={<NotFound/>}/>
           </Routes>
           </BrowserRouter>

      {/*<StateExample/>
     { /*<JSX/>
      <DemoExample price="1st price"/>
      <Events/>
      <FuncProps carname="audi" year="1998"/>
      <h1>good afternoon</h1>
     <section>
            <PropsExample name="ramani" age="19"/>
            <PropsExample name="chitti" age="21"/>

           <h1>React.JS</h1>
            <img src="https://miro.medium.com/max/680/1*C4yGTDSLSz86TCakrza2HQ.jpeg" alt="react js"/>
            <p>React is a JavaScript library for building user interfaces.</p>
             <ClassComponent/> 

      </section>*/}
      </div>
      
    )
}
export default App