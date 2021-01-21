( () => {
    
    // class Avenger {

    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre: string, equipo: string, nombreReal: string){
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //     }
    // }

    class Avenger {

        // nombre: string;
        // equipo: string;
        // nombreReal: string;

        // puedePelear: boolean;
        // peleasGanadas: number;

        constructor(public nombre: string, 
                    public equipo: string, 
                    public nombreReal?: string,
                    public puedePelear?: boolean,
                    public peleasGanadas?: number){
            
        }
    }

    const antman = new Avenger('Atman','cap');

    console.log(antman)

})()


