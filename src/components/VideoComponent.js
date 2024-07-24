function VideoComponent() {
  return (
    <video width="320" height="240" controls>
      <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"></source>
      <source src="movie.ogg" type="video/ogg"></source>
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;