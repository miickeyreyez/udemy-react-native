import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';
import SingleSaucer from '../saucer/single-saucer';

const Menu = () => {
  const { firebase } = useContext(FirebaseContext);
  const [saucers, setSaucers] = useState([]);

  const handleSnapshot = (snapshot) => {
    const response = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(response);
    setSaucers(response);
  }

  useEffect(() => {
    const getSaucers = () => {
      // This not get results in real time
      // const results = await firebase.db.collection('products').get();
      // results.forEach((saucer) => console.log(saucer.data()));
      firebase.db.collection('products').onSnapshot(handleSnapshot);
    };

    getSaucers();
  }, []);

  return (
    <>
      <h1 className='text-3xl font-light mb-4'>
        Menú
      </h1>

      <Link className='bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold' to='/new-saucer'>
        Agregar Platillo
      </Link>

      {
        saucers.map((saucer) => <SingleSaucer key={saucer.id} saucer={saucer} />)
      }
    </>
  );
};
 
export default Menu;
