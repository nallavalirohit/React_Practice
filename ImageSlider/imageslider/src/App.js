import ImageSlider from "./ImageSlider";

function App() {

  const slides =[
    {url:'http://localhost:3000/mountain.jpg', title:'mountain'},
    {url:'http://localhost:3000/streets.jpg', title:'streets'},
    {url:'http://localhost:3000/silence.jpg', title:'silence'},
    {url:'http://localhost:3000/fish.jpg', title:'fish'},
    {url:'http://localhost:3000/explore.jpg', title:'explore'}
  ];

  const containerStyles = {
    width: '500px',
    height: '300px',
    margin: '0 auto'
  };

  return (
    <div className="App">
      <h1>Image Slidaaaa</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500}/>
      </div>
    </div>
  );
}

export default App;
