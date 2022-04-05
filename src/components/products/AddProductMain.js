import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PRODUCT_CREATE_RESET } from '../../Redux/Constants/ProductConstants';
import { createProduct } from '../../Redux/Actions/ProductActions';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import Toast from '../LoadingError/Toast';

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddProductMain = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [countInStock, setCountInStock] = useState(0);

  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { product, error, loading } = productCreate;

  useEffect(() => {
    if (product) {
      toast.success('Product Added Successfully', ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName('');
      setPrice(0);
      setDescription('');
      setCountInStock(0);
      setImage('');
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(name, price, description, image, countInStock));
  };

  return (
    <>
      <Toast />
      <section className='content-main' style={{ maxWidth: '1200px' }}>
        <form onSubmit={submitHandler}>
          <div className='content-header'>
            <Link to='/products' className='btn btn-danger text-white'>
              Go to products
            </Link>
            <h2 className='content-title'>Add product</h2>
            <div>
              <button type='submit' className='btn btn-primary'>
                Publish now
              </button>
            </div>
          </div>

          <div className='row mb-4'>
            <div className='col-xl-8 col-lg-8'>
              <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                  {error && <Message variant='alert-danger'>{error}</Message>}
                  {loading && <Loading />}
                  <div className='mb-4'>
                    <label htmlFor='product_title' className='form-label'>
                      Product title
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type='text'
                      placeholder='Type here'
                      className='form-control'
                      id='product_title'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='product_price' className='form-label'>
                      Price
                    </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      type='number'
                      placeholder='Type here'
                      className='form-control'
                      id='product_price'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='product_price' className='form-label'>
                      Count In Stock
                    </label>
                    <input
                      onChange={(e) => setCountInStock(e.target.value)}
                      value={countInStock}
                      type='number'
                      placeholder='Type here'
                      className='form-control'
                      id='product_price'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='form-label'>Description</label>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      placeholder='Type here'
                      className='form-control'
                      rows='7'
                      required
                    ></textarea>
                  </div>
                  <div className='mb-4'>
                    <label className='form-label'>Images</label>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Enter Image URL'
                      onChange={(e) => setImage(e.target.value)}
                      value={image}
                    />
                    <input className='form-control mt-3' type='file' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
