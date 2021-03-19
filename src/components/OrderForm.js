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
                    <h1>Het mooie bestelformulier!</h1>
                    <div className="separator"></div>

                    <h3>Uw gegevens</h3>
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
                    {errors.firstname && errors.firstname.type == "required" && (
                        <div className="error">
                            <p>Voornaam is verlpicht!</p>
                        </div>
                    )}
                    {errors.lastname && errors.lastname.type == "required" && (
                        <div className="error">
                            <p>Achternaam is verplicht!</p>
                        </div>
                    )}

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
                        {errors.age && errors.age.type == "required" && (
                            <div className="error">
                                <p>Leeftijd is verplicht!</p>
                            </div>

                        )}
                        {errors.age && errors.age.type == "pattern" && (
                            <div className="error">
                                <p>Alleen nummers zijn toegestaan</p>
                            </div>
                        )}
                        {errors.age && errors.age.type == "min" && (
                            <div className="error">
                                <p>U moet minstens 18 jaar oud zijn!</p>
                            </div>
                        )}
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
                        </div>
                    </div>
                    {errors.zipcode && errors.zipcode.type == "pattern" && (
                        <div className="error">
                            <p>Dit is geen geldige postcode!</p>
                        </div>
                    )}
                    {errors.zipcode && errors.zipcode.type == "required" && (
                        <div className="error">
                            <p>Postcode is verplicht!</p>
                        </div>
                    )}
                    {errors.home && errors.home.type == "pattern" && (
                        <div className="error">
                            <p>Huisnummer is alleen een nummer...</p>
                        </div>
                    )}
                    {errors.home && errors.home.type == "required" && (
                        <div className="error">
                            <p>Huisnummer is verplicht!</p>
                        </div>
                    )}

                    <h3>Bezorgingsmethode</h3>
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
                                    <label htmlFor="elsetextbox">Anders, namelijk:</label>
                                    <input name="elsetextbox" ref={register({required: true})} type="text"/>
                                    {errors.elsetextbox && errors.elsetextbox.type == "required" && (
                                        <div className="error">
                                            <p>This is required</p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        )}
                    </div>
                    {errors.delivery && errors.delivery.type == "required" && (
                        <div className="error">
                            <p>Selecteer uw bezorgingsmethode!</p>
                        </div>
                    )}
                    <div className="form-comment one-column column">
                        <div className="item">
                            <label htmlFor="comment">Opmerking
                                <textarea name="textarea" ref={register({required: true})}
                                          id="comment"></textarea></label>
                        </div>
                    </div>
                    <div className="one-column">
                        <button className="button" type="submit" ref={register}>Verzend</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default OrderForm;