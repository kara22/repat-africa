import Nav from '../components/nav';
import Content from '../components/content';
import RegisterButton from '../components/registerButton';
import '../static/css/main.scss';


const Home = () => {

  return(
    <div className="content">
      <Nav/>
      <Content/>
      <RegisterButton/>
    </div>
  )
 
}
export default Home
