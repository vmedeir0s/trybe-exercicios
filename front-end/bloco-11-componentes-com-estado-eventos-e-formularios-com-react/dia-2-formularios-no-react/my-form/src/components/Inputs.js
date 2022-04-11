import React from "react";
import './Inputs.css'

class Inputs extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
          <div className="container">
            <label htmlFor="nome">Nome:
              <input
                type="text"
                name="nome"
                maxLength={4}
                required
                placeholder="Digite..."
                autoComplete="off"
              />
            </label>
            <label htmlFor="email">Email:
              <input
                type="email"
                name="email"
                maxLength={50}
                required
                placeholder="Digite..."
                autoComplete="off"
              />
            </label>
            <label htmlFor="CPF">CPF:
              <input 
                type="text"
                name="cpf" 
                maxLength={11}
                required
                placeholder="Digite..."
                autoComplete="off"
              />
            </label>
          </div>
      </fieldset>
    )
  }
}

export default Inputs