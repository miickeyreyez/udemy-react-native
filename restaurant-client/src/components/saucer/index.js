import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FileUploader from 'react-firebase-file-uploader';
import { FirebaseContext } from '../../firebase';

const Saucer = () => {
  const { firebase } = useContext(FirebaseContext);

  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      image: '',
      category: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup
              .string()
              .min(3, 'Al menos 3 caracteres')
              .required('Campo obligatorio'),
      price: Yup
              .number()
              .min(1, 'Valor numérico')
              .required('Campo obligatorio'),
      category: Yup
              .string()
              .required('Campo obligatorio'),
      description: Yup
              .string()
              .min(5, 'Al menos 5 caracteres')
              .required('Campo obligatorio'),
    }),
    onSubmit: (data) => {
      try {
        data.exists = true;
        data.image = url;
        firebase.db.collection('products').add(data);
        navigate('/menu');
      } catch (e) {
        console.log(e);
      }
    },
  });

  const handleUploadStart = () => {
    setProgress(0);
    setIsUploading(true);
  };

  const handleUploadError = (error) => {
    setIsUploading(false);
    console.log(error);
  };

  const handleUploadSuccess = async (name) => {
    setProgress(100);
    setIsUploading(false);

    const imageUrl = await firebase.storage.ref('products').child(name).getDownloadURL();
    setUrl(imageUrl);
  };

  const handleProgress = (currentProgress) => {
    setProgress(currentProgress);
  };

  return (
    <>
      <h1 className='text-3xl font-light mb-4'>
        Nuevo Platillo
      </h1>

      <div className='flex justify-center mt-10'>
        <div className='w-full max-w-3xl'>
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Nombre
              </label>

              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Nombre del platillo'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {
              (formik.touched.name && formik.errors.name) && (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                  <p className='font-bold'>
                    Error:
                  </p>

                  <p>
                    {formik.errors.name}
                  </p>
                </div>
              )
            }

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price'>
                Precio
              </label>

              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='price'
                type='number'
                placeholder='$0'
                min='0'
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {
              (formik.touched.price && formik.errors.price) && (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                  <p className='font-bold'>
                    Error:
                  </p>

                  <p>
                    {formik.errors.price}
                  </p>
                </div>
              )
            }

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>
                Categoría
              </label>

              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='category'
                name='category'
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value=''> Seleccionar </option>
                <option value='breakfast'> Desayuno </option>
                <option value='lunch'> Comida </option>
                <option value='dinner'> Cena </option>
                <option value='dessert'> Postre </option>
                <option value='salad'> Ensalada </option>
                <option value='drinks'> Bebidas </option>
              </select>
            </div>

            {
              (formik.touched.category && formik.errors.category) && (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                  <p className='font-bold'>
                    Error:
                  </p>

                  <p>
                    {formik.errors.category}
                  </p>
                </div>
              )
            }

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='image'>
                Imagen
              </label>

              <FileUploader
                accept='image/*'
                id='image'
                name='image'
                randomizeFilename
                storageRef={firebase.storage.ref('products')}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
              />

              {/* <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='image'
                type='file'
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              /> */}
            </div>

            {
              isUploading && (
                <div className='h-12 relative w-full border'>
                  <div className='bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center' style={{ width: `${progress}%` }}>
                    { progress } %
                  </div>
                </div>
              )
            }

            {
              url && (
                <p className='bg-green-500 text-white p-3 text-center my-5'>
                  La imagen se subió correctamente
                </p>
              )
            }

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
                Descripción
              </label>

              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40'
                id='description'
                placeholder='Descripción del platillo'
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
              </textarea>
            </div>

            {
              (formik.touched.description && formik.errors.description) && (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                  <p className='font-bold'>
                    Error:
                  </p>

                  <p>
                    {formik.errors.description}
                  </p>
                </div>
              )
            }

            <div className='mb-4'>
              <input
                type='submit'
                className='bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold'
                value='Agregar platillo'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
 
export default Saucer;
