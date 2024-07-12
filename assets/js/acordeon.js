const arcordeonTriggers = document.querySelectorAll('.acordeon .trigger')

arcordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) =>{
        const arcordeon = trigger.parentElement
        const isOpen = arcordeon.classList.contains('open')
        if(isOpen) {
            arcordeon.classList.remove('open')    
        }else{
            arcordeon.classList.add('open')
        }
    })
})
