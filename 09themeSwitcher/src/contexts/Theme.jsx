import { createContext,  useState ,useEffect, Children } from "react";

// yaha hume dono file ek hi m bana di hai kyu ki hamne export const kiya hai default nahi kiya 
// agar ham kisi file m export default krte hai to dusara kuch export default nahi kr sakte par 
// ek export default  k sath kitne bhi export const kr sakte hai 


// Ye bali user context bali file hai 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})


// Ye Vo Jo user Context Provider ki file banate the vahi hai ye
// Jo kaam ham yaha kr rahe hai vo kaam ham manualy app.jsx m bhi kr sakte hai 
// Bas vaha value pass kr do 
export const ThemeProvider =  ({ children }) => {

    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light");
    }

    const darkTheme = () => {
        setThemeMode("dark");
    }

    // Actual Change in theme
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);


    return (
        <ThemeContext.Provider value={{ lightTheme, darkTheme, themeMode }} >
            {children}
        </ThemeContext.Provider>
    );
}