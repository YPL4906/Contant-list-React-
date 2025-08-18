import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink } from "react-router-dom";
import CardContact from "../components/CardContact.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<NavLink className="btn btn-primary mb-5" to="/create-contact">AddContact</NavLink>

			<CardContact/>
		</div>
	);
    


}; 