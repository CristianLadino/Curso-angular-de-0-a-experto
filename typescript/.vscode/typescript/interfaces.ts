( () => {
    interface Xmen {
        nombre: string
        edad: number
        poder?: string // el ? dice que el objetivo puede o que no tenga el atributo
    }

    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviando a ${ xmen.nombre} a la mision`);
    }

    const regresarMision = (xmen: Xmen) => {
        console.log(`Regresando ${ xmen.nombre} de la mision`);
    }

    const wolverine: Xmen = {
        nombre: 'logan',
        edad: 90
    }

    enviarMision(wolverine);
    regresarMision(wolverine);

})()


