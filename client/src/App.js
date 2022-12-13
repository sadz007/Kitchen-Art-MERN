import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import DisplayAll from './components/DisplayAll';
import OneRecipe from './components/OneRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import Login from './components/Login';
import SingUp from './components/SingUp';
import Main from './components/Main';
import './App.css';
import NavBar from './components/NavBar';
// import {useEffect} from 'react'





function App() {



  



  return (
    <div className="App">
      
        
      <BrowserRouter>
        <header className="App-header">
      <NavBar/>
          
          <Routes>
            <Route path={'/'} exact element={<Main/>}/>
            <Route element={<SingUp />} path={'/signup'} />
            <Route element={<Login/>} path={'/login'}/>
            
            <Route element={<DisplayAll />} path={'/recipe/blog'}/>
         
            <Route element={<RecipeForm />} path={'/recipe/add'}/>
           
            <Route element={<OneRecipe/>} path={'/recipe/:id'}/>
            
            <Route element={<UpdateRecipe/>} path={'/recipe/edit/:id'}/>



            {/* <Route element={<Navigate to={'/recipe/blog'}/>} path={'/'} /> */}
            {/* <Route element={<Ingredients/>} path={'/recipe/add'}/> */}
            {/* <Route element={<Image/>} path={'/image/add'}/> */}
            
          </Routes>

        </header>
        
   
        <footer className='relative h-14 mt-10 border-black border-shadow-xl'></footer>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
