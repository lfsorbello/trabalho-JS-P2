function evento(){
    document.querySelector("button").addEventListener("click",teste);
}

function teste(){
    //Promise
    //p a -> (a -> p b) -> p b
    // let resp = fetch("https://fatecrl.edu.br/")
    // let x = resp.text()
    //https://cors-anywhere.herokuapp.com/
    //QUANDO A REQUISICAO DER PROBLEMA
    //WEB SCRAPPING
    fetch("https://cors-anywhere.herokuapp.com/gshow.globo.com/moda-e-beleza/")
        .then(resp => resp.text())
        .then(x => {
                let dom = new DOMParser();
                let doc = dom.parseFromString(x,"text/html");
                //A VARIAVEL doc CONTEM o DOM da OUTRA PAGINA.
                doc.querySelectorAll(".feed-post-link")
                    .forEach(span => document.body.appendChild(span));
            }
        )
        .catch(e => document.write(e))
}

window.onload = evento
