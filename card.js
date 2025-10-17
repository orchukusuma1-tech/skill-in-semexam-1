import React from "react";
export const Box = ({ children, className = "" }) => ( <div className={`p-4 border rounded ${className}`}>{children}</div> );
export const Button = ({ onClick, children }) => ( <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded"> {children} </button> ); 
export const Card = ({ title, children }) => ( <div className="p-4 shadow rounded bg-white"> {title && <h3 className="font-semibold mb-2">{title}</h3>} {children} </div> ); 
function App() {
  return ( <Box> <Card title="Example Card"> <p>
   </p> <Button onClick={() => alert("Clicked!")}>Click Me</Button> </Card> </Box> );
   }0
