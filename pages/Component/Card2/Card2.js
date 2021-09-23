import React from 'react'
import classes from './Card2.module.css'

export default function Card2() {
    return (
        <div className={classes.body}>
           <div className={classes.container}>
            <div className={classes.Box}>
                <div>
                    <i className={`${classes.fas} ${classes.fapencil} ${classes.ruler}`}></i>
                    <h2>Design</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <a href="#">Learn More</a>
                </div>
            </div>
                <div className={classes.Box}>
                    <div>
                        <i className={`${classes.fas} ${classes.fausers}`}></i>
                        <h2> Team</h2>
                        <p> Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div> 

                <div className={classes.Box}>
                    <div>
                        <i className={`${classes.fas} ${classes.falaptopcode}`}></i>
                        <h2> Code</h2>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>


        </div>
        </div>
    )
}
