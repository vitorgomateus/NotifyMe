/**
 * Created by VitorMaGo on 09/01/2017.
 */
import React, { Component } from 'react';
import '../css/mymodal.css';


class MyModal extends Component{

    render(){
        var titulo;
        var texto;
        switch (this.props.wich) {
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
                titulo= "Erro. Não há esclarecimento para dar. Feche esta janela";
        }

        if(this.props.modal==true){
            return(
                <div className="backg-modal" onClick={() => this.props.onClick()}>
                    <div className="modal-minha">
                        {titulo}
                        <br/>
                        {texto}
                        <br/>
                        <button className="btn btn-sm btn-primary" onClick={() => this.props.onClick()}>
                            close
                        </button>
                    </div>
                </div>);
        }else {
            return (
                <div id="nomodal"></div>

            );
        }
    }
}

export default MyModal;