( () => {
    const miFuncion = ( a: number, b: number ) => a+b; 
    
    console.log( miFuncion(10,5));

    const hulk = {
        nombre: 'Hulk',
        
        smash() {

            setTimeout(()=>{
                console.log(`${ this.nombre } smash!!!`)
            }, 1000)
            
        }
        
    }
    hulk.smash();
})()


