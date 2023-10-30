import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const ThankYouPage = () => {
    
    const {state} = useLocation();
    
    return (
        <Card email={state.email}/>
    );
}

export default ThankYouPage;