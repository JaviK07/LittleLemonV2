import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Reserve.module.css"
import { useForm } from "react-hook-form";

function Reserve () {
   
    const { register, formState:{ errors, isSubmitSuccessful }, handleSubmit, reset } = useForm()

    const onSubmit = (data) =>{
        console.log(data);
        alert("Reserve Successful")
        reset()
    }

    return (
        <div className={styles.Reserve} id="form"> 
            
            <form onSubmit={handleSubmit(onSubmit)}> 

                <div className={styles.formContainer}>
                <h2 className={styles.form__h2}>Reserve Now!</h2>
                    <div>
                        <label className={styles.label} >Name</label>
                        <input className={styles.input} type="text" name="" {...register("name", {
                            required: true,
                            minLength:2
                            
                            } )}/>
                            {errors.name?.type === "required" && <p>The field must be completed to continue</p> }
                            {errors.name?.type === "minLength" && <p>The field must have more than two letters</p>}
                    </div>

                    <div className={styles.sections} >
                        <label className={styles.label} >Last Name</label>
                        <input className={styles.input} type="text" name="" {...register("lastName", {
                            required: true
                        })} />
                        {errors.name?.type === "required" && <p>The field must be completed to continue</p> }

                    </div>

                    <div>
                        <label className={styles.label} >Date</label>
                        <input className={styles.input} type="date" name="" {...register("date", {
                            required: true
                        })} />
                        {errors.name?.type === "required" && <p>The field must be completed to continue</p> }
                    </div>

                    <div>
                        <label className={styles.label} >Time</label>
                        <input className={styles.input} type="time" name="" min="09:00" max="18:00" {...register("time", {
                            required: true
                        })} />
                        {errors.name?.type === "required" && <p>The field must be completed to continue</p> }
                        {/* {isSubmitSuccessful} */}
                    </div>

                    <input className={styles.submit} type="submit" value="Reserve" name='' {...register("submit", {
                            // {isSubmitSuccessful}
                        })}/>
                </div>
            </form>
        
        </div>
    )
}

export default Reserve














