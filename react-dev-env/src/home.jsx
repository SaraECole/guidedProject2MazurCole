import { Link } from 'react-router-dom';

function Home({characters}) {
    return (
    <>
    
    <h1>Home Page!</h1>
    
    <div id="myDIV">
        <h1>In a galaxy far far away...</h1>
    </div>
      <h1>Star Wars Universe Lookup</h1>

      {characters.map((character, index)=><div key={index} className='characterList'>
        <Link to={`/character/${character.id}`}>{character.name}</Link>
      </div>)}

      {/* <label for="searchString"
        >Who you looking for?
        <span class="small">(Regular expressions are cool here)</span></label
      >
      <input
        id="searchString"
        oninput="filterCharacters()"
        autocomplete="off"
      /> */}


      {/* {products.map((product, index) => (
        <li key={index}>{product.productName}</li>
      ))} */}

    </>
  );
}
export default Home;

