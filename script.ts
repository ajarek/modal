class Modal{
  info:string
  color:string
  button:string
  
    constructor(info:string,color:string,button:string){
        this.info = info
        this.color = color
        this.button = button
    }
    
    show(){
        let modal = document.createElement('div')
        modal.classList.add('modal')
        modal.innerHTML = ` <div class="info" style="color:${this.color}">${this.info}</div>      
        </div>
        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo quia minima ex fuga eaque veritatis, iure excepturi?</div>
        <div class="modal-buttons"><button >Zakceptuj</button><button >Anuluj</button></div>`
        document.body.appendChild(modal)
        let button = document.createElement('button')
        button.innerHTML = this.button
        button.classList.add('closse')
       
        modal.appendChild(button)
        button.addEventListener('click',()=>{
            modal.remove()
        })
    }
    removeModal():void {
        const modal = document.querySelector('.modal') as HTMLDivElement
        const modalButtons = document.querySelectorAll('.modal-buttons >button') as NodeListOf<HTMLButtonElement>
        modalButtons.forEach(button => {
            button.addEventListener('click', () => {
        modal.remove()
            })
        })
    }
}

let warning = new Modal("⚠️Czy jesteś pewny, że chcesz wyjść?","hsl(27, 87%, 67%)","❌")
let error = new Modal("🛑Uwaga zmiany nie zostana zapisane!","hsl(353, 86%, 54%)","❌")
let def = new Modal("❓ Czy jesteś pewny?","hsl(197, 100%, 45%)","❌")

 const buttonsActions = document.querySelectorAll('.buttons>button') as NodeListOf < HTMLButtonElement >
    buttonsActions.forEach(button => {
        button.addEventListener('click', displayModal)
        }) 
               
        function displayModal(e: Event) {           
           const modal= document.querySelector('.modal') as HTMLElement
           modal?.remove()
            const target = e.target as HTMLButtonElement          
            const action = target.dataset.show
            switch (action) {
                case 'warning':
                    warning.show()
                    warning.removeModal()
                    break;
                case 'error':
                    error.show()
                    error.removeModal()
                    break;
                case 'default':
                    def.show()
                    def.removeModal()
                    break;
            }
        }