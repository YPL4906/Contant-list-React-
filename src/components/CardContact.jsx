import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaTrash, FaEdit } from "react-icons/fa";

function CardContact({contact, onDelete}) {
    return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-md-2 d-flex justify-content-center p-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
            alt="profile"
            className="img-fluid rounded-circle"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body py-2">
            <h5 className="card-title mb-1">{contact.name}</h5>
            <p className="card-text mb-1">
              <FaMapMarkerAlt className="me-2 text-secondary" />
              {contact.address}
            </p>
            <p className="card-text mb-1">
              <FaPhone className="me-2 text-secondary" />
              {contact.phone}
            </p>
            <p className="card-text mb-0">
              <FaEnvelope className="me-2 text-secondary" />
              {contact.email}
            </p>
          </div>
        </div>

        <div className="col-md-2 text-end pe-3">
          <button className="btn btn-link text-secondary">
            <FaEdit />
          </button>
          <button className="btn btn-link text-danger" onClick={() => onDelete(contact.id)} >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardContact