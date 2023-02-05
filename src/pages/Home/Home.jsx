import logo from "./morgana-logo.png";

const Home = () => {
    return (
        <div className='row align-items-center m-5'>
        <div className='col-12 col-lg-4'>
          <img src={logo} width="100%" height="auto"alt="logo"/>
        </div>
        <div className='col-12 col-lg-8 greeting'>
          <h1>Welcome, traveller.</h1>
          <h1>My name is Morgana, the shopkeeper. </h1>
          <h1>Here you'll find all kinds of artifacts and creatures to aid you in your quest.</h1>
        </div>
      </div>
    )
}

export {Home}