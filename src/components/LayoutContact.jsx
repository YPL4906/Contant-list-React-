import React, { useState } from "react";

function LayoutContact() {

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [phone,setPhone]= useState("")
  const [address,setAddress]= useState("")

  async function createContact() {

    try {
      let response = await fetch('https://playground.4geeks.com/contact/agendas/yerico/contacts', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        address: address
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })
    let data = await response.json()
    console.log(data);


    } catch (error) {
      console.log(error)
    }



  }

    return (
       <form className="layout mx-auto" onSubmit={createContact}>
        <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Put your email" onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter phone" onChange={(e)=>setPhone(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Put your Address" onChange={(e)=>setAddress(e.target.value)}/>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="submit">Save Contact</button>
  </div>
    </form>
    )

}

export default LayoutContact