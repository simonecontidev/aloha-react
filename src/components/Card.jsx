function Card({title, imgURL, isVisited, children}) {

return (
    <div className="rounded-md bg-zinc-950 shadow-lg p-4 flex flex-col items-center">
      <img src={imgURL} alt="Random" />
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
        <p className="text-gray-500">{children}</p>
        {isVisited && <span className="text-green-500 mt-2">Visited</span>}
      </div>
    </div>
  );
  }
  

export default Card;