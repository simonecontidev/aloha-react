function Card({title, imgURL}) {

    const description = "This is a description of the card.";

  return (
    <div className="rounded-md bg-zinc-950 shadow-lg p-4 flex flex-col items-center">
      <img src={imgURL} alt="Random" />
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default Card;