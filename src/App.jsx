import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";

function App() {

  const [thememode,setThememode] = useState("light")

  const lightTheme = ()=>{
    setThememode("light")
  }

  const darkTheme = ()=>{
    setThememode("dark")
  }

  //actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn  */}
          </div>
          <div className="w-full max-w-sm mx-auto">{/* Card  */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
