import React from 'react'
import classes from './Card5.module.css'

export default function Card5() {
    return (
        <div>
           <div className={classes.container}>
            <div className={classes.thecard}>
                <div className={classes.thefront}> 
                    <img className={classes.adve} src="https://cdn.cnn.com/cnnnext/dam/assets/170407220921-07-iconic-mountains-pitons-restricted.jpg" alt={Mountains}/>
         
                </div>
                <div className={classes.theback}> the back

                    <p className={classes.date}>08 sept 2021</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h4 className={classes.adv}>Adventure</h4>
                </div>  

            </div>    
        </div>
  
        </div>
    )
}

