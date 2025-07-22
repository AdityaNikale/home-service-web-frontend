import { createContext, useState, useContext, Children } from "react";

//step1 : create context
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    //step2 : create state called isLoggedIn
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedValue = localStorage.getItem("isLoggedIn");
        return storedValue === "true"; // return boolean
    });

    //step3 : define functions login & logout
    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", "false");
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );

};

//step4 : create and export the custom hook  which we have created.
export const useLogin = () => useContext(LoginContext);