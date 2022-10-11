import React from "react"

import {Carro} from "./Carro"

//export : exporta exatamente com o mesmo nome entre chaves no outro arquivo
//export default : vai o arquivo e nao precisa de chaves. so pode ter um por arquivo

export default function Garagem(){
  const nome = "Lais"
  return(
    <>
      <h1>Garagem de {nome}</h1>
      <Carro/>
      <Carro/>
      <Carro/>
    </>
  )
}

