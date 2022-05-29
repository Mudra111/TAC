import Home1 from "./componentes/home1";
import Home2 from "./componentes/Home2" 
import Home3 from "./componentes/tac-b" ;
import { useNavigate } from 'react-router-dom';


function Home(props){
  
  let navigate = useNavigate();
  // if(props.user){
  //     // return 
  //     return ();
  // }
  const click = () => {
      if(props.user){
      navigate("/insta")}
    else{
      navigate("/home")
    }
  }
    return (
      <div>
        <Home1/>
        <Home2/>
        <button onClick={click}>click</button>
        <Home3/>
      </div>
    );
  }
  
  export default Home;
  
