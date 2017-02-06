# NotifyMe
third try at a prototype for a masters in communication @DeCA, Aveiro.

##TODO:

    login
    swipe
    search bar em Prefs.jsx
    check post, delete
        Funciona mas 3:
        -Não consegui com que a mensagem do SwAl tente a alteração de novo;
        -A página faz reload e a posição do scroll vai à vida, muito frustrante para o utilizador; --- RESOLVIDO
        -Por alguma razão, depois de fazer o pedido de alteração à API, e antes de alterar o state com esse resultado, state já está alterado;
    css
    build
    cordova

#### Features
* Registo/Login:
    * ecrã com logo e mensagem de introdução. butões login/registo.
    *    Introduzir dados de identificação ?
*    Definir opções de visualização:
     *   des)ligar sugestões
         *   Escolher preferências de conteúdos     ---NaN
         *   Des)ligar opção zapping     ---NaN
     *   des)ligar lembretes
         *   Agendamento de lembretes     ---NaN
         *   Disponibilidade em intervalo pré-definido     ---NaN
         *   Disponibilidade por acesso a agenda pessoal     ---NaN
         *   Disponibilidade por proximidade à televisão     ---NaN
     *   des)ligar radar social
         *   Associação de outras pessoas ---NaN
         *   Por contactos Google       ---NaN
         *   Por contactos Facebook     ---NaN
* Consultar sugestões/agendamentos X

#### Cenas fiches
* Mostrar quanto tempo falta ou há quanto já começou um programa.
    * Lista
    * Epp - tá quase, dá um erro
* Mostrar duração do programa
    * Lista - X
* Eliminar duplicações de canais com e sem HD
(parece-me suficiente manter só os HD disponíveis e ter uma opção para isso nas definições, só pela paranoia :P)
    
#### Comunicações com API
* Preferências      ---     All Done     
    * Push
    * Delete
    * Get
        * Fazer com Id's ou Siglas do canal? - Siglas
* Dados do Utilizador
    * Fazer registo
    * Get user details
* Definições de utilização da app       ---     NaN
    * Get
    * Push