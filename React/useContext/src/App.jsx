import React, { createContext } from 'react'
import CompA from './CompA'
export let nameContext = createContext();
function App() {
    let msg = "Welcome to Broadway"
    let Data_for_compC = "Prabhat Mallik"
    return (
        <>
            <nameContext.Provider value={Data_for_compC}>
                <h4>App Component</h4>
                <CompA fromA={msg} />
            </nameContext.Provider>
        </>
    )
}

export default App