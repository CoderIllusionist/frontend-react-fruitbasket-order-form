import React, {useState} from 'react';
import {useForm} from "react-hook-form";


function OrderForm({test}) {

    const {register, errors, watch, handleSubmit} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {},
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true,

    });

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstname">Voornaam</label>
                <input name="firstname" ref={register({required: true})} type="text"/>

                <label htmlFor="lastname">Achternaam</label>
                <input name="lastname" ref={register({required: true})} type="text"/>

                {errors.age && errors.age.type == "required" && (<p>This is required</p>)}
                {errors.age && errors.age.type == "pattern" && (<p>This should be only numbers</p>)}
                {errors.age && errors.age.type == "min" && (<p>Minimal age is 18</p>)}
                <label htmlFor="age">Leeftijd</label>
                <input type="number" name="age"
                       ref={register({required: true, valueAsNumber: true, min: 18, pattern: {
                               value: /^-?[0-9]\d*\.?\d*$/i,
                               message: ""
                           }})} type="text"/>

                {errors.home && errors.home.type == "pattern" && (<p>This should be only numbers</p>)}
                <label htmlFor="number">Huisnummer</label>
                <input type="number" name="home"
                       ref={register({required: true, valueAsNumber: true, min: 18, pattern: {
                               value: /^-?[0-9]\d*\.?\d*$/i,
                               message: ""
                           }})} type="text"/>

                <label htmlFor="every-week">Elke week</label>
                <input name="delivery" ref={register({required: true})} type="radio" id="every-week"
                       value="every-week"/>

                <label htmlFor="weekly">Om de week</label>
                <input name="delivery" ref={register({required: true})} id="weekly" type="radio" value="weekly"/>

                <label htmlFor="every-month">Iedere maand</label>
                <input name="delivery" ref={register({required: true})} id="every-month" type="radio"
                       value="every-month"/>

                <label htmlFor="else">Anders</label>
                <input name="delivery" ref={register({required: true})} id="else" type="radio" value="else"/>

                <label htmlFor="comment">Opmerking
                    <textarea name="textarea" ref={register({required: true})} id="comment"></textarea></label>

                <button type="submit" ref={register}>Verzend</button>

            </form>
        </>
    )

}

export default OrderForm;