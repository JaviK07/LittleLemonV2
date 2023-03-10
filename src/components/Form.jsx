import styles from "../styles/Form.module.css"
import { useForm } from "react-hook-form";
import { TimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { useState } from 'react';




function Form () {
    const [quantity, setQuantity] = useState("")

    const handleChange = (e) =>{
        setQuantity(e.target.value)
    }


    const [fecha, cambiarFecha ] = useState(new Date());


    const { register, formState:{ errors }, handleSubmit, reset } = useForm()
    // const {  } = useForm()
    
    
    const onSubmit = (data) =>{
        console.log(data);
        alert("Reserve Successful")
        reset()
    }


    return (
        
        <div className={styles.Reserve} id="form"> 
            
            <form onSubmit={handleSubmit(onSubmit)}> 

                <div className={styles.formContainer}>
                <h2 className={styles.form__h2} style={{textAlign:"center"}}>Book A Table</h2>
                    <div>
                        <label className={styles.label} >Name</label>
                        <input className={styles.input} style={{display:'flex', justifycontent:"center"}} name="" {...register("name", {
                            required: true,
                            minLength:2
                            
                            } )}/>
                            {errors.name?.type === "required" && <p className={styles.error__p}>The field must be completed to continue</p> }
                            {errors.name?.type === "minLength" && <p className={styles.error__p}>The field must have more than two letters</p>}
                    </div>

                    <div className={styles.sections} >
                        <label className={styles.label} >Last Name</label>
                        <input className={styles.input} style={{display:'flex', justifycontent:"center"}} name="" {...register("lastName", {
                            required: true
                        })} />
                        {errors.lastName?.type === "required" && <p className={styles.error__p}>The field must be completed to continue</p> }

                    </div>

                    <div>
                        <label className={styles.label} >Email</label>
                        <input className={styles.input} style={{display:'flex', justifycontent:"center" }} {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        })} />
                        {errors.email?.type === "required" && <p className={styles.error__p}>The field must be completed to continue</p> }
                        {errors.email?.type === "pattern" && <p className={styles.error__p}>The field must be completed a valid email</p> }
                    </div>
                        
                    <div>
                        <label className={styles.label} >Phone</label>
                        <input className={styles.input} style={{display:'flex', justifycontent:"center"}} {...register("phone", {
                            required: true,
                            pattern: /[0-9]/
                        })} />
                        {errors.phone?.type === "required" && <p className={styles.error__p}>The field must be completed to continue</p> }
                        {errors.phone?.type === "pattern" && <p className={styles.error__p}>The field must be completed with a valid phone</p> }
                    </div>

                    <div>
                        <label className={styles.label} >Date</label>
                        <KeyboardDatePicker style={{display:'flex', justifycontent:"center", marginBottom:15}} className={styles.picker} onChange={cambiarFecha} 
                        value={fecha}
                        format="MM/dd/yyyy"
                        variant="inline"
                        
                        {...register("date", {
                          
                        })} />
          
                    </div>

                    <div>
                        <label className={styles.label} >Time</label>
                        <TimePicker style={{display:'flex', justifycontent:"center", textAlign:"center", marginBottom:15}} className={styles.time} name="" min="09:00" max="18:00" {...register("time", {
                            required: true
                        })}/>
               
                    </div>

                    <div>
                    <InputLabel className={styles.label}>Attendees</InputLabel>
                        <Select  style={{ height: 40}} labelId="label" id="select" value={quantity} onChange={handleChange} displayEmpty fullWidth >
                            <MenuItem value="" disabled>Select Attendees</MenuItem>
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Three</MenuItem>
                            <MenuItem value={4}>Four</MenuItem>
                        </Select>
            
                    </div>
                        
                    <button className={styles.Submit} type="submit" name=''>Reserve</button>
                        
                </div>
            </form>

                <div className={styles.card}>
                    <h3 className={styles.card__h3}>
                        We'll be expecting you!
                    </h3>
                    <p className={styles.card__p}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>        
                </div>
        </div>
        
    )
    
}

export default Form















