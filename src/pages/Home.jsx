import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink } from "react-router-dom";
import CardContact from "../components/CardContact.jsx";
import { useEffect, useState } from "react";
import React from "react";

//

export const Home = () => {

	const [contactos, setContactos] = useState([])

	const { store, dispatch } = useGlobalReducer()

	const getContacts = async () => {
		const respuesta = await fetch("https://playground.4geeks.com/contact/agendas/yerico/contacts")
		const datos = await respuesta.json()
		setContactos(datos.contacts)
	}

	const deleteContact = async (id) => {
		try {
			await fetch(`https://playground.4geeks.com/contact/agendas/yerico/contacts/${id}`, {
				method: "DELETE"
			});
			setContactos(contactos.filter(c => c.id !== id));
		} catch (error) {
			console.error("Error eliminando contacto:", error);
		}
	};


	useEffect(() => {
		getContacts()
	}, [])


	return (
		<div className="text-center mt-5">
			<NavLink className="btn btn-primary mb-5" to="/create-contact">
				Add Contact
			</NavLink>

			{contactos.length > 0 ? (
				contactos.map((con) => <CardContact key={con.id} contact={con} onDelete={deleteContact} />)
			) : (
				<p>Empty</p>
			)}
		</div>
	);




}; 