import React from "react";

function Tabela(){
    const dados = [
        {
            nome: "Vinicius", cpf: "123456789", 
            dataNascimento: "16/07/2003"
        },
        {
            nome: "Gustavo", cpf: "123456789", 
            dataNascimento: "01/01/24"
        },
        {
            nome: "João", cpf: "123456789",
            dataNascimento: "01/01/24"
        },
        {
            nome: "Jailson", cpf: "123456789",
            dataNascimento: "01/01/24"
        }
    ]
    return <div>
        <h2>Lista de Pessoas</h2>
        <table border="1" style={{
            width: '100%', textAlign: 'left', marginTop: '20px'
        }}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Data de Nascimento</th>
                </tr>
            </thead>
            <tbody>
                {
                    dados.map((pessoa, index) => (
                        <tr key={index}>
                            <th>{pessoa.nome}</th>
                            <th>{pessoa.cpf}</th>
                            <th>{pessoa.dataNascimento}</th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}

export default Tabela;