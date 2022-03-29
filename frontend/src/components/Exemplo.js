import './Exemplo.css'

const Exemplo = () => {
    window.onload = function () {
        document.getElementById("teste").innerHTML = "Teste!!"
    }

    return <>
        <h1>Exemplo</h1>
        <p>Hello world</p>
        <p id="teste"></p>
    </>
}

export default Exemplo;
