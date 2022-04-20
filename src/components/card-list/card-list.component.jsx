import Card from '../card/card.component'
import './card-list.styles.css'

//const CardList = ({monsters}) => {
const CardList = (props) => { //props is an object
    const {monsters} = props
    return(
        <div className='card-list'>
            {
                monsters.map(
                    (monster, index) => <Card
                                    key = {index}
                                    id={monster.id}
                                    name={monster.name}
                                    email={monster.email}
                                /> 
                )
            }
        </div>
    )
}

export default CardList