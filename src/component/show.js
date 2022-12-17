function Show(props) {

  return (
    <div className="showData">
      {props.dataItem.map((ele, index) => {
        return (
          <div className='item' key={index}>
            <img src={ele.show.image?.medium} alt="show_Related_Image" />
            <h4>{ele.show.name}</h4>
            <p>{ele.show.genres}</p>
            <p>{ele.show.language}</p>
            <p>{ele.show.rating.average}</p>

            <button onClick={() => props.Summary(ele.show.id)}> Summary </button>
          </div>
        )
      })}
    </div>
  )
}
export default Show;