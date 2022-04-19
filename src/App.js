const user = [{ //array containing objects
    fName: "Sakshi",
    lName: "Kataria"
}, {
    fName: "Govind",
    lName: "Kaushik"
}]
const App = () => {
    let a = 10
    let b = 11
    return (
        <div>
            <h1>
                Monsters App
            </h1>
            <p>Building CRUD App</p>
            <p>Some Calculation: {a*b}</p>
            { //we are doing data binding in {}
                user.map(
                    function display(element, index){
                        return (<div>
                                <p>{element.fName}</p>
                                <p>{element.lName}</p>
                            </div>)
                    }
                )
            }
        </div>
    )
}

export default App
