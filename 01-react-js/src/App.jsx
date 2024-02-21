import "./index.css";

const App = () => {
  const fakeJson = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `item ${index +1}`
  }));
  console.log(fakeJson);
  return (
    <>
      <div></div>
    </>
  );
};

export default App;
