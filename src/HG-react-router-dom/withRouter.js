import React, { Component } from 'react'
import RouterContext from './RouterContext'

// export default class componentName extends Component {
//     render() {
//         return (
//             <RouterContext.Consumer>
//                 {
//                     context=>{

//                     }
//                 }
//             </RouterContext.Consumer>
//         )
//     }
// }
const withRouter =WarpComponent=>props=>{
    return (
        <RouterContext.Consumer>
            {
                context=>{
                    return <WarpComponent {...props} {...context}/>
                }
            }
        </RouterContext.Consumer>
    )
}
export default withRouter