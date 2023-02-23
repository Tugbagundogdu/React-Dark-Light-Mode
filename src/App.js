import { useState } from "react";


function App() {

  const changeTheme = ()=>{

    setTheme(theme === 'dark' ? 'light' : 'dark')
    
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
  }

  const [theme, setTheme] = useState('dark')
  return (
   <div className="h-screen bg-blue-200  dark:bg-black dark:text-white">
    <nav className=" bg-green-100 h-24 flex justify-center items-center dark:bg-slate-600  ">
      <h1>Tailwind Css ile Dark/Light Mode</h1>
      <button 
      onClick={changeTheme}
      className="bg-gray-500 ml-5 text-white ">{theme} Mode</button>
    </nav>
  
   </div>
  );
}

export default App;
