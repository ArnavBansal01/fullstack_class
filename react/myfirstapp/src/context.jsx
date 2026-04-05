import { createContext } from "react";
import { useContext } from "react";

const MyContext = createContext();
function Context(){
    const value = "Hello from context";
    return (
        <MyContext.Provider value={value}>
            <Parent />
        </MyContext.Provider>
    );}
function Parent(){
    return (
        <Child />
    );
}

function Child(){
    const value = useContext(MyContext);
    return (
        <h1>{value}</h1>
    );
}
export default Context;