// classe que vai conter a logica dos dados
// como os dados serao estruturados
 export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
       this.entries = [
            {
                login: 'rafaelokra',
                name:"Rafael ",
                public_repos: '36',
                followers: '120'
            },
            {
                login: 'rafaelokra',
                name:"Rafael ",
                public_repos: '36',
                followers: '120'
            }
        ]
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => 
            entry.login !== user.login)
          
        

        console.log(filteredEntries)
    }
}


// classe que vai criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

       this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`

            row.querySelector('.user img').alt = `Image de ${user.name}`

            row.querySelector('.user p').textContent = user.name

            row.querySelector('.user span').textContent = user.login

            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
               const isOK = confirm('Tem certeza que deseja deletar essa linha?')
               if(isOK){
                this.delete(user)
               }
            }

            this.tbody.append(row)
        })

    }  

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `

        
                    <td class="user">
                        <img src="https://github.com/rafaelokra.png" alt="">
                        <a href="https://github.com/rafaelokra" target="_blank">
                            <p>Rafael</p>
                            <span></span>
                        </a>
                    </td>
                    <td class="repositories">
                        35
                    </td>
                    <td class="followers">
                        1002
                    </td>
                    <td>
                        <button class="remove">&times;</button>
                    </td>
                </tr>
                `
        
        return tr

    }

    removeAllTr() {

        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}