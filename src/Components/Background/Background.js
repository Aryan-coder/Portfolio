import './Background.css'
import {useState, useEffect} from 'react'


export default function Background() {


return (<div className='background' >

<div className='shape-group' style={{top: '5%'}}  >

<div className='shape-line-1' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>
<div className='shape-line-2' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>

</div>

<div className='shape-group' style={{top: '15%'}}  >



<div className='shape-line-reverse-1' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>
 
<div className='shape-line-reverse-2' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>

</div>

<div className='shape-group' style={{top: '50%'}}  >

<div className='shape-line-1' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>
<div className='shape-line-2' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>

</div>

<div className='shape-group' style={{top: '60%'}}  >



<div className='shape-line-reverse-1' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>
 
<div className='shape-line-reverse-2' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>

</div>

<div className='shape-group' style={{top: '80%'}}  >



<div className='shape-line-reverse-1' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>
 
<div className='shape-line-reverse-2' >
  {Array.apply(null, {length: 15}).map((shape,i)=><div className='shape' key={i} ></div>)}
</div>

</div>

</div>)
}
