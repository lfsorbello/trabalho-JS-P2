function evento() {
    document.querySelector("button").addEventListener("click",teste);
}

function teste() {

    fetch("https://cors-anywhere.herokuapp.com/gshow.globo.com/moda-e-beleza/")
        .then(resp => resp.text())
        .then(x => {
            
                let dom = new DOMParser();
                let doc = dom.parseFromString(x,"text/html");
                doc.querySelectorAll(".feed-post-link")
                    .forEach(span => document.body.appendChild(span));
            }
        )
        .catch(e => document.write(e))
}

window.onload = evento


