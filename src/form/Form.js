import React from "react";
import { appendErrors, useForm } from "react-hook-form";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import './Form.css';
import iconUser from '../img/iconConnexion.svg';
import cadenas from '../img/cadenas.svg';
import main from '../img/main.png';


function changeImageUser(){
    //document.getElementById("ImageMain").style.paddingTop=300 +"px"   ne fonctionne pas , j'essaye de changer la place de l'image lorsque je click sur l'input username ou password
}

function changeImagePassword(){
    //document.getElementById("ImageMain").style.paddingTop=400 +"px"

}


export default function Form() {
    const { register, handleSubmit,handleChange, formState : {errors} } = useForm();
    const onSubmit = data => console.log(data);


  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <div className="divMain">
                    <img id="ImageMain" src={main} style={{height:"300px", float: "left", paddingTop:"300px"}}></img>
                </div>
                <div className="username">
                    <img src={iconUser} className="imgUser"></img>
                    <Input variant="filled" color="success" /*onChange={changeImageUser()}*/ type="text" {...register("username", {required : true})} placeholder="Username"/>
                    {errors.username && <p>Username is required</p>}
                </div>
            </div>
            <div className="form-group">
                <div className="password">
                    <img src={cadenas} className="imgCadenas"></img>
                    <Input color="success" /*onChange={changeImagePassword()} */ type="password" {...register("password", {required : true})} placeholder="Password"/>
                    {errors.password && <p>Password is required</p>}
                </div>
            </div>
            <div className="btn">
            <Button type="submit" color="success" variant="contained">Se connecter</Button>
            </div>
        </form>
  );
}