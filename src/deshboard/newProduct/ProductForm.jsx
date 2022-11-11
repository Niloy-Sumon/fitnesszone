import React from 'react';
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    // data.preventDefault();
    const url = `http://localhost:5000/addService`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        window.location.reload();
      })
  };


  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <input className="p-2 mt-2 rounded-xl border" type="title" name="title" placeholder="title" {...register("title", { required: true })} />
              <textarea className="p-2 mt-2 rounded-xl border" type="description" name="description" placeholder="description" {...register("description", { required: true })} />
              <input className="p-2 mt-2 rounded-xl border" type="number" name="price" placeholder="price" {...register("price", { required: true })} />
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Add product</button>
            </form>

          </div>
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductForm;