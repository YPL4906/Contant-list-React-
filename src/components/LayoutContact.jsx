import React from "react";

function LayoutContact() {

    return (
       <div className="layout mx-auto">
        <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Email</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Put your email"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Phone</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter phone"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Address</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Put your Address"/>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Save Contact</button>
  </div>
    </div>
    )

}

export default LayoutContact