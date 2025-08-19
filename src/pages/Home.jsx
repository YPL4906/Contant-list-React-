import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink } from "react-router-dom";
import CardContact from "../components/CardContact.jsx";
import { useEffect, useState } from "react";


export const Home = () => {

const [contactos,setContactos] = useState([])

  const {store, dispatch} =useGlobalReducer()

  const getContacts = async () =>{
  const respuesta = await fetch ("https://playground.4geeks.com/contact/agendas/yerico/contacts")
  const datos = await respuesta.json()
  setContactos(datos.contacts)
  }


useEffect(() => {
	getContacts()
},[])


	return (
		<div className="text-center mt-5">
			<NavLink className="btn btn-primary mb-5" to="/create-contact">AddContact</NavLink>
			{contactos.map((contacto) => {
				return (
					<>
					<p>{contacto.name}</p>
					<p>{contacto.address}</p>
					</>
				)
			})}

			<CardContact/>
		</div>
	);
    


}; 