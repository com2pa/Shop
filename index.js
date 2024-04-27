
// selector 
const shopIcon=document.querySelector('#shop-icon')
// const heroIcon=document.querySelector('#hero-icon')
// console.log(heroIcon);
const cart = document.querySelector('.cart')
const table = document.querySelector('#table-body')
const courseBtn = document.querySelectorAll('.course-btn')
const tableClear = document.querySelector('#table-clear')

const buscador = document.querySelector('#buscador')//input
const lista =document.querySelectorAll('#courses-list')//ul
const cursos=document.querySelectorAll('.courses-item')//li
const nombreCurso = document.querySelectorAll('#course-title')
const botonBusqueda = document.querySelector('#hero-icon')
const texto=document.querySelector('#texto')
// paso 2 -creando evento apra los btones

courseBtn.forEach(btn => {
    btn.addEventListener('click',e=>{
        const img = e.target.parentElement.parentElement.children[0].innerHTML;//imagen
        const name = e.target.parentElement.children[0].innerHTML;// obtenemos la imagen y el nombre 

        // antes de agregar los elemento de los curso al carrito 
        // debemos buscar si existe el curso en la lista
        const exist = [...table.children].find(element => element.children[1].innerHTML== name) //convertiendo en array 
        
        if(exist){
            exist.children[3].innerHTML=Number(exist.children[3].innerHTML)+1
        }else{

            // paso3 para agregar todos curso al carrito
        // tr
        const row = document.createElement('tr')

        row.innerHTML=`
                <td>${img}</td>
                <td>${name}</td>
                <td>15$</td>
                <td>1</td>
                <td><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" class="delete-btn">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </td> `
        //img ->imagen del curso
        //name ->nombre del curso
        //15$ ->costo del curso
        //1 ->cantidad del curso
        //svg ->boton para eliminar el curso
        //(e.currentTarget); selecciona el td solamente


        row.children[4].addEventListener('click',e=>{
            e.currentTarget.parentElement.remove();
       }) ;   

        table.append(row)
        }

        
    })
})




// evento para darle click al boton de shop-icon
shopIcon.addEventListener('click',e=>{
    cart.classList.toggle('show-cart') //mostrando 
    
});

// vaciar carrito
tableClear.addEventListener('click',e=>{
    table.innerHTML='';
})



// buscador

buscador.addEventListener('keyup',e=>{
    const busqueda = e.target.value.toLowerCase()
    
     if(busqueda){
        console.log(busqueda)
        cursos.forEach(curso =>{
            const nombre = curso.children[1].textContent.toLowerCase()
            if(nombre.includes(busqueda)){
                // curso.style.display='flex'
                curso.classList.add('visible');
            }else{
                curso.classList.add('noVisible');
                
                
                
            }
        })


    }
    
})

