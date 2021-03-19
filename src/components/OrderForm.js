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

    const watchCheck = watch("check", false); // supply default value as second argument
    const radioButtons = watch("delivery", false);
    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-names two-columns column">
                        <div className="item">
                            <label htmlFor="firstname">Voornaam</label>
                            <input name="firstname" ref={register({required: true})} type="text"/>
                        </div>
                        <div className="item">
                            <label htmlFor="lastname">Achternaam</label>
                            <input name="lastname" ref={register({required: true})} type="text"/>
                        </div>
                    </div>

                    <div className="form-age one-column column">
                        <div className="item">
                            <label htmlFor="age">Leeftijd</label>
                            <input type="number" name="age"
                                   ref={register({
                                       required: true, valueAsNumber: true, min: 18, pattern: {
                                           value: /^-?[0-9]\d*\.?\d*$/i,
                                           message: ""
                                       }
                                   })} type="text"/>
                        </div>
                        {errors.age && errors.age.type == "required" && (<p>This is required</p>)}
                        {errors.age && errors.age.type == "pattern" && (<p>This should be only numbers</p>)}
                        {errors.age && errors.age.type == "min" && (<p>Minimal age is 18</p>)}
                    </div>
                    <div className="form-address two-columns column">
                        <div className="item">
                            <label htmlFor="zipcode">Postcode</label>
                            <input type="text" name="zipcode"
                                   ref={register({
                                       required: true, pattern: {
                                           value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                                           message: ""
                                       }
                                   })} type="text"/>
                            {errors.zipcode && errors.zipcode.type == "pattern" && (
                                <p>This is not a valid Dutch zip code!</p>)}
                        </div>
                        <div className="item">
                            <label htmlFor="number">Huisnummer</label>
                            <input type="number" name="home"
                                   ref={register({
                                       required: true, valueAsNumber: true, min: 18, pattern: {
                                           value: /^-?[0-9]\d*\.?\d*$/i,
                                           message: ""
                                       }
                                   })} type="text"/>
                            {errors.home && errors.home.type == "pattern" && (<p>This should be only numbers</p>)}
                        </div>
                    </div>
                    <div className="form-delivery-options five-columns column">
                        <div className="radio-button">
                            <label htmlFor="every-week">Elke week</label>
                            <input name="delivery" ref={register({required: true})} type="radio" id="every-week"
                                   value="every-week"/>
                        </div>
                        <div className="radio-button">

                            <label htmlFor="weekly">Om de week</label>
                            <input name="delivery" ref={register({required: true})} id="weekly" type="radio"
                                   value="weekly"/>
                        </div>
                        <div className="radio-button">

                            <label htmlFor="every-month">Iedere maand</label>
                            <input name="delivery" ref={register({required: true})} id="every-month" type="radio"
                                   value="every-month"/>
                        </div>
                        <div className="radio-button">
                            <label htmlFor="else">Anders</label>
                            <input name="delivery" ref={register({required: true})} id="else" type="radio"
                                   value="else"/>
                        </div>
                        {radioButtons === "else" && (
                            <div className="one-column column">
                                <div className="item">
                                <label htmlFor="else-textbox">Anders, namelijk:</label>
                                <input name="else-textbox" ref={register({required: true})} type="text"/>
                                </div>
                            </div>

                        )}
                    </div>
                    <div className="form-comment one-column column">
                        <div className="item">
                            <label htmlFor="comment">Opmerking
                                <textarea name="textarea" ref={register({required: true})}
                                          id="comment"></textarea></label>
                        </div>
                    </div>
                    <button type="submit" ref={register}>Verzend</button>

                </form>
            </div>
        </>
    )

}

export default OrderForm;