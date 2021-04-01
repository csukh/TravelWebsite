import React from 'react'
import '../index.css'
import {useState} from 'react'

const AddBlocks = ({onEnter}) => {
    
    const [text, setText] = useState('')
    const [dest,setDest] = useState('')
    const [img,setImg] = useState('./components/defaultimage.jpg')

    const submitForm = (e)=>{
        e.preventDefault()
        if (!dest){
            alert('please enter a destination')
            return
        }

        //addDestination({dest,text,img})
        console.log(dest + text + img )

        onEnter({dest,text,img})
        
        setText('')
        setDest('')
        setImg('')
    }

    return (
        <form className='dest_form' onSubmit={submitForm}>
            <div className = 'form-el'>
            <label>Destination</label>
            <input type='text' placeholder='Destination' value={dest} onChange={
                (e)=>{
                    setDest(e.target.value)}} >
            </input>
            </div>

            <div className = 'form-el'>
            <label>Explanation Text</label>
            <input type='text' placeholder='Tell us about your trip' value={text} onChange={
                (e)=>{setText(e.target.value)}}>
            </input>   
            </div>

            <div className = 'form-el'>
            <label>Image</label>
            <input type='text' placeholder='Image for your trip' value={img} onChange={
                (e)=>{setImg(e.target.value)}
            }>
            </input>                                
            </div>


            <button className='btn' >Submit</button>
        </form>
        
    )
}

export default AddBlocks
