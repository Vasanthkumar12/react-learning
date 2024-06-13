function App() {
  
  function randDicipleName() {
    let names = ['Peter', 'Jacob', 'Paul', 'James']
    let rand = Math.floor(Math.random() * 4)
    return names[rand]
  }

  return (
    <div>
      Glory to Jesus
      <p>Go And make Disciples. One of the Disciple name is {randDicipleName()}.</p>
    </div>
  );
}

export default App;
