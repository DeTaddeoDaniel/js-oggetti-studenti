// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

// Stampare a schermo attraverso il for in tutte le proprietà.

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare 
//   per ognuno nome e cognome

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto 
//   studente inserendo nell’ordine: nome, cognome e età.

// jsnack 5
// Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

$(document).ready(function () {

    var students = []

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        do{

            const name = prompt('add name of student');
            const surname = prompt('add surname of student');
            const age = prompt('add age of student');
            
            let student = {
                name: name,
                surname: surname,
                age: age
            }

            students.push(student)
            
            do{
                again = prompt('Can you add new team student:\n- t for add new student\n- n for not add new student');
            } while( !(again=='t'|| again =='T' || again=='n'|| again ==''))


          }while(again=='t'|| again =='T')

        
          $('#listNumber').empty();
          let item;

          for(const  i in students ){

               item = /*html*/ ` 
                    <div class="alert bg-primary text-white" role="alert">
                         <p>Name: ${students[i].name}</p>
                         <p>Surname: ${students[i].surname}</p> 
                         <p>Age: ${students[i].age} years old</p> 
                    </div>`           

                // show in the windows
                $('#listNumber').append(item);       
            } 


    });    
});