import React from 'react'
import classes from './Cards.module.css'

export default function Cards() {
    return (
        <div className={classes.body}>
               <div className={classes.blogpost}>
        <div className={classes.blogpostimg}>
           <img src="wp3175307.jpg"/> 
        </div>
        <div className={classes.blogpostinfo}>
            <div className={classes.blogpostdate}>
              <span>Monday</span> 
              <span>September 20 2021</span> 
            </div>  
            <h1 className={classes.blogposttitle}> Shark Sighting</h1>
            <p className={classes.blogposttext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className={classes.blogpostcta}>Read more</a>
        </div>
    
    </div>       
        
  

        </div>
    )
}
