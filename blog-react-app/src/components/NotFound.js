import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <div className="content">
      I am sorry , Not Found Page
      <Link to="/">
          Back to the home 
      </Link>
    </div> );
}
 
export default NotFound;