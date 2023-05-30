import CardSkill from '../../Components/Card';
import Bio from '../../Components/Bio/';
import CardProject from '../../Components/CardProjects';
import SocialCards from '../../Components/SocialCards';

const About = () => {
  return (
    <div>
      <Bio/>
      <CardSkill/>
      <div id="contacts">
        <SocialCards/>
      </div>
      <CardProject/>
    </div>
  );
};
  
export default About;