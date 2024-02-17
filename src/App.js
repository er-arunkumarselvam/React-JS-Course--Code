import './assets/css/style.css';
import SkyCast from './Component/SkyCast';
// import Demo from './Component/demao';

function App() {
  // const add =50+50;
  // const firstName = 'Arunkumar';
  // const favColor =['Red','Blue','Green','Yellow','black','white']
  // const present = false;
  // const status = present ? <p>Present</p> :<p>Absent</p>
  return (
    
    <div className="App">
      {/* <Demo/>
      <h1>React Prop - Value</h1>
      <h2>Expression in js: {25+25}</h2>
      <h2>Variables in js: {add}</h2>
      <h2>Variables in js: {firstName}</h2>
      <h2 style={{color:'brown'}}>Style in js: {firstName}</h2>
      <ul>
        {favColor.map((item,index)=> (<li key={index}>{item}</li>))}
      </ul>
      <h3>{status}</h3> */}
      <SkyCast/>

    </div>
  );
}

export default App;
