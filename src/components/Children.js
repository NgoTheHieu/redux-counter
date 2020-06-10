import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Box from '../Box'

export default function Children() {
    let count = useSelector(state => state.count)
    let color = useSelector(state => state.color)
    let [boxColor, setBoxColor] = React.useState(null)   //
   
   
    console.log("color is: ", color)
    let dispatch = useDispatch()    //let dispatch = useDispatch()
    let textColor = "white"     //Initially the color of the box is white

   
    if (count > 10) {
        textColor = "yellow"    //Automatically turn the whole lines of boxes into yellow if ...
    }
    return (
        // This is just how You would make your array listed as boxes
        <div>
            {Array(count).fill('box').map(box => {      // This is how you learn to render an array to your field
               return(
                   <Box></Box>                          //  Yaaaaaaah
               )


            })}
        </div>
        // This is 
    )
}
