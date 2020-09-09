import React, { useRef, useContext } from 'react';
import { FirebaseContext } from '../../firebase';

const SingleSaucer = ({ saucer }) => {
  const { category, description, exists, id, image, name, price } = saucer;

  const existsRef = useRef(saucer.exists);

  const { firebase } = useContext(FirebaseContext);

  const updateAvailability = () => {
    try {
      firebase.db.collection('products').doc(id).update({
        exists: existsRef.current.value === 'true',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full px-3 mb-4'>
      <div className='p-5 shadow-md bg-white'>
        <div className='lg:flex'>
          <div className='lg:w-5/12 xl:w-3/12'>
            <img src={image} alt='saucer' />

            <div className='sm:flex sm:-mx-2 pl-2'>
              <label className='block mt-5 sm:w-2/4'>
                <span className='block text-gray-800 mb-2 sm:w-2/4'>
                  Existencia
                </span>

                <select
                  className='bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  value={exists}
                  ref={existsRef}
                  onChange={() => updateAvailability()}
                >
                  <option value='true'>
                    Disponible
                  </option>

                  <option value='false'>
                    No disponible
                  </option>
                </select>
              </label>
            </div> 
          </div>

          <div className='lg:w-7/12 xl:w-9/12 pl-5'>
            <p className='font-bold text-2xl text-yellow-600 mb-4'>
              { name }
            </p>

            <p className='text-gray-600 mb-4'>
              Categoría: 

              <span className='text-gray-700 font-bold'>
                { ` ${category.toUpperCase()}` }
              </span>
            </p>

            <p className='text-gray-600 mb-4'>
              { description }
            </p>
            <p className='text-gray-600 mb-4'>
              Precio: 

              <span className='text-gray-700 font-bold'>
                { ` $${ Number(price).toFixed(2) }` }
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SingleSaucer;
