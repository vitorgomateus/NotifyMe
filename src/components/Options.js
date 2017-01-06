/**
 * Created by VitorMaGo on 28/12/2016.
 */
import React, { Component } from 'react';
import '../css/options.css';/*
import '../css/specialInput.css';*/

class Options extends Component {

    render (){

        return(

            <form className="form-horizontal opcoesAlignCenter">
                <fieldset> <legend>Alterar definições </legend>
                    <fieldset className="opcoesAlignLeft">
                        <legend>Sugestões:</legend>
                        <div className="form-group pdr">
                            {/*<label htmlFor="inputEmail" className="control-label col-xs-2">Sugestões</label>*/}
                            <div className="col-xs-10">
                                <label><input type="checkbox" id="checkSuges" /> Activar sugestões de contúdos novos</label><br/>
                                <label><input type="checkbox" id="checkZapp" /> Activar opção de Zapping</label><br/>
                                <button className="btn-default btn butino" id="mudarPrefs" > Mudar preferências</button>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="opcoesAlignLeft">
                        <legend>Lembretes:</legend>
                        <p className="btpd">Quando quer receber lembretes?</p>
                        <div className="form-group pdr">
                            <div className="col-xs-10">
                                <label><input type="radio" name="whenMemo" value="interval"/> Intervalo de horas definido: <br/>
                                    <div className="col-xs-offset-1 col-xs-10">
                                        Desde:
                                        <input type="time" className="form-control" id="inputPassword" placeholder="DEV_TIME_SELECTOR" />
                                        Até:
                                        <input type="time" className="form-control" id="inputPassword" placeholder="DEV_TIME_SELECTOR" />
                                    </div>
                                </label><br/>
                                <label><input type="radio" name="whenMemo" value="agenda"/> Segundo disponibilidade na minha agenda.</label><br/>
                                <label><input type="radio" name="whenMemo" value="neartv" checked/> Quando estou próximo da TV.</label><br/>

                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="opcoesAlignLeft">
                        <legend>Radar Social:</legend>
                        <p className="btpd">Como quer associar os seus contactos??</p>
                        <div className="form-group pdr">
                            <div className="col-xs-10">
                                <label><input type="radio" name="whatContacts" value="google" checked/> Contactos Google.</label><br/>
                                <label><input type="radio" name="whatContacts" value="facebook"/> Contactos Facebook.</label><br/>
                                <label><input type="radio" name="whatContacts" value="tele"/> Contactos Telemóvel.</label><br/>
                                <label><input type="radio" name="whatContacts" value="box"/> Pessoas associadas à mesma box.</label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="opcoesAlignLeft">
                        <div className="form-group">
                            <div className="col-xs-offset-2 col-xs-10 n-pdr">
                                <button type="submit" className="btn btn-primary col-xs-8">Guardar Alterações</button>
                            </div>
                        </div>
                    </fieldset>
                </fieldset>
            </form>
        );
    }
}

Options.defaultProps ={
    params: {id: 'there.s no options to display'}
}

export default Options;