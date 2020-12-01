import React, { Component } from 'react'

const element=(v,k)=>(<p key={k}>{v}</p>);
const array1=["1","2","3",["1","2","3","4"]];
const element1=array1.map((v,k)=>{
             
    return typeof v === "string"?element(v,k):v.map((v1,k1)=>element(v1,k+k1))
});
console.log(element1)
export default class Antform3 extends Component {
    render() {
      
   
        return (
            <div className="pageContainer">
               
            </div>
        )
    }
}
