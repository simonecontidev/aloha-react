function CardForm(addCity) {
    const handleSubmit = () => {
        const city = {
      id: 4,
      title: "Barcelona",
      imgURL: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg",
      isVisited: true,
      description: "This is a description of the card of Barcelona"
    }

        addCity(city);
    };

    return(
        <form onSubmit={handleSubmit} lassName="flex flex-col gap-3 w-80 mb-10">
            
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Add Card</button>
        </form>
    )
} 
export default CardForm;