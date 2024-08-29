import CardMedia from "../components/Card/CardMedia";
import dataMedia from "../constants/dataMedia";

function Media() {
  return (
    <div className="container my-3">
      <h1>Media</h1>
      <div className="row">
        {dataMedia.map((data) => {
          return (
            <CardMedia
              image={data.image}
              title={data.title}
              detail={data.detail}
              key={data.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Media;
