const dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle("active")
})

const optionlist = document.querySelectorAll(".option_list")

optionlist.forEach((option) =>{
    option.addEventListener("mouseover", function (){
        const value = option.dataset.value

        result(value)
    })
})

function result(value){
    document.querySelector('.input').value = value
}