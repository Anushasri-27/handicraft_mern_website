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
      pstock: "",
      pdescription: "",
    },

    onSubmit: async (values, action) => {
      values.image = selFile;
      console.log(values);
      const res = await fetch("hhtps://localhost:5000/prodcut/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      });
      console.log(res.status);
      action.resetForm();
      if(res.status === 200){
        Swal.fire({
          icon: "success",
          title :"item uploaded succesfully",
        });
        navigate('/productList');
      }else{
        Swal.fire({
           icon: "error",
           title: "error",
           text: "something went wrong",
        })
      }
    },
    validationSchema : AddProductSchema,
  });
  const uploadFile = (e) =>{
    const file =e.target.file[0];
    if(!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile",file);
    fetch("http://localhost:5000/utils/uploadfile",{
      method:"post",
      body: fd,

    }).then((res)=>{
      if(res.status ===200){
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
                    name="pname"
                    required=""
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
                    name="pprice"
                    required=""
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
                    name="pcategory"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-subject" className="form-label">
                    stock
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pstock"
                    name="pstock"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="your-message" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    id="pdescription"
                    name="pdescription"
                    rows={5}
                    required=""
                    defaultValue={""}
                  />
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
