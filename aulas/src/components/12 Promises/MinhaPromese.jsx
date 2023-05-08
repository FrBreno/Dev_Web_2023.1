import { useEffect } from "react";

const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const x = 11;
        if (x%2 === 0) resolve("Deu bom!")
        else reject("Deu ruim :/")
    }, 3000)
});

function meuGet(url) {
    return minhaPromise;
}

const MinhaPromise = () => {
    useEffect(() => {
        meuGet("http://...")
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }, []);
}

export default MinhaPromise;