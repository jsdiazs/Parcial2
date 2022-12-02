import Banda from "./banda";

const { useEffect, useState } = require("react");

function Bandas() {
 const [bandas, setBandas] = useState([]);
 useEffect(() => {
  const URL =
    "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
  fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      setBandas(data);
    });
}, []);

 return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Género</th>
            <th scope="col">Fundación</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Bandas", bandas)}
          {bandas.map((e, i) => (
            <Banda key={i} banda={e} />  
            ))}    
        </tbody>
      </table>
    </div>
  );
};


export default Bandas;


