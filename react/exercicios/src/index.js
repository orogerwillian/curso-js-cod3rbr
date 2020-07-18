import React from "react"
import ReactDom from "react-dom"

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Enes" sobrenome="Rocha">
            <Filho nome="Roger"  />
            <Filho nome="Derik"  />
            <Filho nome="Henrique" />
        </Pai>
    </div>
    , document.getElementById('root'))