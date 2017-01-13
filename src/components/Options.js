/**
 * Created by VitorMaGo on 28/12/2016.
 */
import React, { Component } from 'react';
import MyModal from './MyModal';
import question from '../img/question_btn.png';
import { Button } from 'react-bootstrap/lib/Button';
import '../css/options.css';

class Options extends Component {

    constructor() {
        super();
        this.state = {
            openmodal: false,
            wichmodal: 0,
        };
    }

    render (){

        return(
            <div className="opcoesAlignCenter">
                <form className="form-horizontal" action="#" method="post">
                    <fieldset> <legend>Alterar definições </legend>
                        <fieldset className="opcoesAlignLeft">
                            <legend>Lembretes:
                                <img className="question-mark" src={question} alt="What is this?" onClick={() =>{
                                    var check = this.state.openmodal;
                                    this.setState.openmodal = !check;
                                    this.setState({wichmodal:1});
                                }}/>
                            </legend>
                            <p className="btpd">Quando quer receber lembretes?</p>
                            <Button bsStyle="primary">Primary</Button>
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
                                    <label><input type="radio" name="whenMemo" value="neartv" /> Quando estou próximo da TV.</label><br/>

                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="opcoesAlignLeft">
                            <legend>Sugestões:
                                <img className="question-mark" src={question} alt="What is this?" onClick={() =>{
                                    var check = this.state.openmodal;
                                    this.setState.openmodal = !check;
                                    this.setState({wichmodal:2});
                                }}/>
                            </legend>
                            <div className="form-group pdr">
                                {/*<label htmlFor="inputEmail" className="control-label col-xs-2">Sugestões</label>*/}
                                <div className="col-xs-10">
                                    <label><input type="checkbox" id="checkSuges" /> Activar sugestões de contúdos novos</label><br/>
                                    <label><input type="checkbox" id="checkZapp" /> Activar opção de Zapping</label><br/>
                                    <button className="btn-default btn butino" id="mudarPrefs" href="/prefs"> Mudar preferências</button>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="opcoesAlignLeft">
                            <legend>Radar Social:
                                <img className="question-mark" src={question} alt="What is this?" onClick={() =>{
                                    var check = this.state.openmodal;
                                    this.setState.openmodal = !check;
                                    this.setState({wichmodal:3});
                                }}/>
                            </legend>
                            <p className="btpd">Como quer associar os seus contactos??</p>
                            <div className="form-group pdr">
                                <div className="col-xs-10">
                                    <label><input type="radio" name="whatContacts" value="google" /> Contactos Google.</label><br/>
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

                    <MyModal modal={this.state.openmodal} wich={this.state.wichmodal} onClick={() => this.handleClick()}/>
                </form>
            </div>
        );
    }
}

export default Options;