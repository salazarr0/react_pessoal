function Pessoa({name, age, work, photo}){
    return (
            <div>
                <img src={photo} alt={name}/>
                <h3>Name: {name}</h3>
                <p>Age: {age}</p>
                <p>Work: {work}</p>
            </div>
    )
}

export default Pessoa;