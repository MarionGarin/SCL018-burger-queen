import React from "react";

// creamos contexto, es decir un estado globarl
const ClientContext = React.createContext();


// a través de {children} accedemos a los elementos hijo de nuestro componente, 
// es decir de app hacia abajo


//este componente será el proveedor del estado global
const ClientProvider = ({children}) => {
    return ( 
        
        //aquí abajo pasamos el estado global y lo inyectamos a los elementos hijos
        <ClientContext.Provider value={'hola'}>
        {children}
        </ClientContext.Provider>
     );
}
 
export {ClientContext, ClientProvider};