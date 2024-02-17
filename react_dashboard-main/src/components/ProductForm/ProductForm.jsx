import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import '../ProductForm/ProductForm.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ProductForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        reset,
    } = useForm();

    const onSubmission = async (data) => {
        try {
          const formData = new FormData();
          formData.append('file', data.image[0]); // Assuming you want to handle only the first file if multiple files are selected
    
          const imageUploadResponse = await fetch('http://localhost:9094/shop/v1/store-product-image', {
            method: 'POST',
            body: formData,
          });
    
          if (imageUploadResponse.status === 200) {
            const imageUploadData = await imageUploadResponse.json();
            const { name, description, price, stock } = getValues();
    
            const productAddResponse = await fetch('http://localhost:9094/shop/v1/product', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name,
                description: description,
                price: parseInt(price),
                stock: parseInt(stock),
                filename: imageUploadData.filename,
              }),
            });
    
            const productAddData = await productAddResponse.json();
    
            if (productAddData.id > 0) {
              toast.success('Product added successfully');
              reset(); // Reset the form after successful submission
            } else {
              toast.error('Failed to add product');
            }
          } else {
            toast.error('Image upload failed');
          }
        } catch (error) {
          console.error(error);
          toast.error('An error occurred');
        }
      };


  return (
    <>
    <div className='product_container'>
    <form className='productForm' onSubmit={handleSubmit(onSubmission)}encType="multipart/form-data">
        <h3 className='title'>Products Update Form</h3>
        <div className='product_group'>
            <label htmlFor="">Name</label>
            <input
            className='name-input' 
            type="text"
            name="name"
            id="name"
            {...register('name', { required: true })} 
            />
        </div>

        <div className='product_group'>
            <label htmlFor="">Description</label>
            <input
            className='name-input' 
            type="text"
            name='description'
            id="description"
            {...register('description', { required: true })}
            />
        </div>

        <div className='product_group'>
            <label htmlFor="">Price</label>
            <input 
            className='price-input'
            type="text"
            name='price'
            id="price"
            {...register('price', { required: true })}
            />
        </div>
        <div className='product_group'>
            <label htmlFor="">Stock</label>
            <input 
            className='name-input'
            type="text"
            name='stock'
            id="stock"
            {...register('stock', { required: true })} 
            />
        </div>

        <div className='product_group'>
            <label htmlFor="">Product Image</label>
            <input 
            type="file"
            name='image'
            id="file"
            {...register('image', { required: true })} 
            />
        </div>


        <div>
            <button type="submit" className='updateBtn'>
                Update Product
            </button>
        </div>

        <ToastContainer/>

    </form>
    </div>
    </>
  )
 }


export default ProductForm;  
