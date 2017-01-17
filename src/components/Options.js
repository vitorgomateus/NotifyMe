/**
 * Created by VitorMaGo on 28/12/2016.
 */
import React, { Component } from 'react';
import MyModal from './MyModal';
import question from '../img/question_btn.png';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap/lib/Button';
import '../css/options.css';

import swal from 'sweetalert';
import '../../node_modules/sweetalert/dist/sweetalert.css';

class Options extends Component {

    constructor() {
        super();
        /*this.state = {
            openmodal: false,
            wichmodal: 0,
        };*///                                          sem a MyModal.js, isto não énecessário


        this.kickAmodal = this.kickAmodal.bind(this);//     nem sei se é preciso
    }

    handleClick(e){
        this.setState({openmodal: false});
    }

    kickAmodal(x){
        /*var check = this.state.openmodal;//           usar com modal feita à mão -> MyModal.js
         this.setState({openmodal: !check});//          a solução a baixo é ligeiramentemais elegante
         this.setState({wichmodal: x});//               pode sernecessário alterar o conteudo nas variaveis 'titulo'e'texto'para strings.
         */
        /*<MyModal modal={this.state.openmodal} wich={this.state.wichmodal} onClick={() => this.handleClick()}/>*/

        var titulo = "Erro desconhecido";
        var texto = "Não há esclarecimento para dar. Feche esta janela.";
        switch (x) {
            case 1:
                texto=<p>Estes lembretes são notificações que enviámos sempre que algo estiver para começar. <br/>Ou quando tivermos uma sugestão para fazer.</p>;
                titulo= <h4>Lembretes</h4>;
                break;
            case 2:
                texto=<p>Com a opção de sugestões activada, o nosso sistema usará os seus dados para encontrar algo novo e a seu gosto. <br/><br/>Se também activar os lembretes, receberá estas sugestões como notificações.<br/><br/>A opção de zapping enviará sugestões extra para que facilmente alternar entre opções.<br/><br/>Defina as suas preferências televisivas, para que lhe possamos proporcionar uma experiência de TV melhorada!</p>;
                titulo= <h4>Sugestões</h4>;
                break;
            case 3:
                texto=<p>Esta opção serve para saber se mais alguém que você conheça também esteja a ver o mesmo que vocÊ.<br/>Escolha a fonte dos contactos mais conveniente (pode criar um gruo nos seus contatos e adicionar só esse grupo) e estes estarão visíveis enquanto vê televisão.</p>;
                titulo= <h4>Radar Social</h4>;
                break;
            default:
                titulo = "Erro desconhecido";
                texto = "Não há esclarecimento para dar. Feche esta janela.";
        }
        swal(titulo,texto,"info");
    }

    render (){

        return(
            <div className="opcoesAlignCenter">
                <form className="form-horizontal" >
                    <fieldset> <legend>Alterar definições </legend>
                        <fieldset className="opcoesAlignLeft">
                            <legend>Lembretes:
                                <img className="question-mark" src={question} alt="What is this?" onClick={() => this.kickAmodal(1)} />
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
                                <img className="question-mark" src={question} alt="What is this?" onClick={() => this.kickAmodal(2)} />
                            </legend>
                            <div className="form-group pdr">
                                <div className="col-xs-10">
                                    <label><input type="checkbox" id="checkSuges" /> Activar sugestões de contúdos novos</label><br/>
                                    <label><input type="checkbox" id="checkZapp" /> Activar opção de Zapping</label><br/>
                                    <button className="btn-default btn butino" id="mudarPrefs"><Link to="/prefs"> Mudar preferências</Link></button>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="opcoesAlignLeft">
                            <legend>Radar Social:
                                <img className="question-mark" src={question} alt="What is this?" onClick={() => this.kickAmodal(3)} />
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
                                    <button type="button" className="btn btn-primary col-xs-8">Guardar Alterações</button>
                                </div>
                            </div>
                        </fieldset>
                    </fieldset>


                </form>
            </div>
        );
    }
}

export default Options;