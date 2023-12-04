import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddProduct = () => {
  const navigate = useNavigate();
  const [selFile, setSelFile] = useState("");
  const addProductForm = useFormik({
    initialValues: {
      pname: "",
      pprice: "",
      pcategory: "",
      pdescription: "",
      pimage: "",
    },

    onSubmit: async (values, action) => {
      values.image = selFile;
      console.log(values);
      const res = await fetch("http://localhost:5000/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      });
      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "item uploaded succesfully",
        });
        navigate('/browse');
      } else {
        Swal.fire({
          icon: "error",
          title: "error",
          text: "something went wrong",
        })
      }
    },
    // validationSchema : AddProductSchema,
  });
  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "post",
      body: fd,

    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    })
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h1 className="mb-3">Add Product</h1>
            <form onSubmit={addProductForm.handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="pname" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pname"
                    onChange={addProductForm.handleChange} value={addProductForm.values.pname}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pprice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pprice"
                    onChange={addProductForm.handleChange} value={addProductForm.values.pprice}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pcategory" className="form-label">
                    Product category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pcategory"
                    onChange={addProductForm.handleChange} value={addProductForm.values.pcategory}
                  />
                </div>
                
                <div className="col-12">
                  <label htmlFor="your-message" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    id="pdescription"
                    onChange={addProductForm.handleChange} value={addProductForm.values.pdescription}
                  />
                </div>
                <div>
                  <label htmlFor="file">Upload Image</label>
                  <input type="file" name="" onChange={uploadFile} />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="btn btn-dark w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
