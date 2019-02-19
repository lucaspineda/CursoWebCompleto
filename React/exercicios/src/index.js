import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './componentes/Primeiro';

import BomDia from './componentes/BomDia';

import Multiplos from './componentes/Multiplos'

import { BoaTarde, BoaNoite} from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'

import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Lucas" sobrenome="Pineda">
            <Filho nome = "Pedro" />
            <Filho nome = "terra" />
            <Filho nome = "joao" />
        </Pai>

    </div>
, document.getElementById('root'));