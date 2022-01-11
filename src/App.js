
import './App.css';
import Card from './card';

const App=()=>{
  
  return(
    
    
    <div className='container'>
      
      <div className='row cont'>
          <Card title="React and Redux Course" image="mobile.png" description="This course contains all type of functionalities...."  progress="good"percentage="60" />
          <Card title="React and prosp" image="mobile.png" description="This course contains all type of functionalities...."progress="good" percentage="60" />
          <Card title="React and component" image="mobile.png" description="This course contains all type of functionalities...."progress="good" percentage="60"/>
          <Card title="React and hooks" image="mobile.png" description="This course contains all type of functionalities...."progress="good" percentage="60"/>
          <Card title="React and lifecycle" image="mobile.png" description="This course contains all type of functionalities...."progress="good" percentage="60"/>
          <Card title="React and ES6" image="mobile.png" description="This course contains all type of functionalities...."progress="good" percentage="60"/>
          <Card title="React and arrow" image="mobile.png" description="This course contains all type of functionalities...."progress="good" percentage="60"/>
      </div>
      
    </div>
  )
}

export default App;
