import React from "react";

export const PBody = props =>{
  return (

<div>
    
    <table className="table">
              <thead>
                      <tr>
                      <th scope="col" className="text-center">Package</th>
                      <th scope="col" className="text-center">Services</th>
                      <th scope="col" className="text-center">Price</th>
                      <th scope="col" className="text-center">Time</th>
                      </tr>
                  </thead>
              <tbody>

                {props.p.map( (Package, index) => {
                  return (
                    <tr>
                      <td><a>{Package.Name}</a></td>
                      <td>{Package.Description}</td>
                      <td>{Package.Price}</td>
                      <td>{Package.timeToComplete}</td>
                    </tr>
                  )
                })}                
              </tbody>
    </table>
  </div>
);
  }

  export default PBody
