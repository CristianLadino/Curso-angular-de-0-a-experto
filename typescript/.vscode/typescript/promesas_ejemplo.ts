( () => {
    const retirarDinero = (montoRetirar: number) => {
        
        let dineroActual = 1000;

        return new Promise( (resolver, reject) => {

            if ( montoRetirar > dineroActual ) {
                
                reject('No hay dinero suficiente');

            } else {

                dineroActual -= montoRetirar;
                resolver('Saldo ' + dineroActual);
                
            }



        } );

    }

    retirarDinero( 1500 )
                         .then( montoActual => console.log(montoActual))
                         .catch(err => console.warn( err ))

})()


