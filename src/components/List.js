



const List = ({ people,removethisperson }) => {
  
    return (
        <>
            {
                people.map((person) => {

                    const { id, name, age, image } = person;

                    return (
                        <div className="person">
                            <img src={image} alt={name} />
                            <div className="name">
                              <h4>{name} <i className="fa fa-times" aria-hidden="true" onClick={()=>removethisperson(id)}></i></h4>
                             
                              <p>{age} years</p>
                             
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}

export default List;