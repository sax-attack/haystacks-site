import React, { useState } from 'react';
import { useFormik } from 'formik';
import c from 'classnames';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../button';
import { Input } from '../input/input';
import CubeIcon from '../../assets/cube-icon.svg';

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().max(50, 'Maximum 50 letters are allowed').required('Required'),
  lastName: Yup.string().max(50, 'Maximum 50 letters are allowed').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  company: Yup.string().required('Required'),
});

const RequestForm = ({ className }) => {
  const [isLoading, setLoading] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState([]);

  const solution1 = 'MI-95 Predictive Market Insider';
  const solution2 = 'SFR Portfolio Architect';
  const solution3 = 'SFR Portfolio Simulator';

  const onSubmit = async (values) => {
    const payload = {
      ...values,
      selectedSolution,
    };

    setLoading(true);

    try {
      await axios.post('https://getform.io/f/0e920e4c-ceb4-4c4d-8c49-e45fb0450f33', payload);

      toast("Your request was submitted! We'll get back to you shortly!", { type: 'success' });
    } catch (error) {
      toast('An error occurred! Please try again later!', { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      position: '',
    },
    validationSchema: ContactFormSchema,
    onSubmit,
  });

  const onSelect = (option) => {
    if (selectedSolution.includes(option)) {
      const filteredOptions = selectedSolution.filter(opt => opt !== option);

      setSelectedSolution(filteredOptions);
    } else {
      setSelectedSolution([...selectedSolution, option]);
    }
  }

  return (
    <section className={c('container py-24 md:py-44', className)}>
      <ToastContainer
        position='top-right'
        hideProgressBar
        autoClose={2000}
        transition={Slide}
        toastStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        closeButton={false}
      />

      <div className='section'>
        <div className='flex flex-col items-center'>
          <img src={CubeIcon} alt='cube' className='w-12 h-12 mb-4' />
          <h2 className='text-lg md:text-3xl mb-12 text-center font-light'>Request A Demo</h2>
          <p className='text-center text-sm md:text-base max-w-sm md:max-w-2xl font-light px-10'>
            Complete the form and a Haystacks.AI expert will reach out to schedule a custom demo for your needs.
          </p>
        </div>

        <div className='flex flex-col md:flex-row mt-20'>
          <Input
            onChange={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            placeholder='First Name'
            error={errors.firstName && touched.firstName ? errors.firstName : ''}
            className='mb-3 md:mb-7 mr-12 md:w-1/2'
          />

          <Input
            onChange={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            placeholder='Last Name'
            error={errors.lastName && touched.lastName ? errors.lastName : ''}
            className='mb-3 md:mb-7 md:w-1/2'
          />
        </div>

        <Input
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
          placeholder='Email'
          error={errors.email && touched.email ? errors.email : ''}
          className='mb-3 md:mb-7'
        />

        <Input
          onChange={handleChange('company')}
          onBlur={handleBlur('company')}
          placeholder='Company'
          error={errors.company && touched.company ? errors.company : ''}
          className='mb-3 md:mb-7'
        />

        <Input
          onChange={handleChange('position')}
          onBlur={handleBlur('position')}
          error={errors.position && touched.position ? errors.position : ''}
          placeholder='Position'
          className='mb-3 md:mb-7'
        />

        <p className='text-center font-extralight text-base my-10'>What solution(s) are you interested in?</p>

        <div className='flex flex-col md:flex-row justify-around border-border-light-gray md:border-t md:border-b'>
          <p
            onClick={() => onSelect(solution1)}
            className={c(
              'cursor-pointer border-border-light-gray md:border-r text-sm md:text-base p-4 md:p-8 md:w-2/6 text-center font-extralight',
              selectedSolution.includes(solution1) && 'font-bold'
            )}
          >
            {solution1}
          </p>
          <p
            onClick={() => onSelect(solution2)}
            className={c(
              'cursor-pointer p-4 md:p-8 md:w-2/6 text-sm md:text-base text-center font-extralight',
              selectedSolution.includes(solution2) && 'font-bold'
            )}
          >
            {solution2}
          </p>
          <p
            onClick={() => onSelect(solution3)}
            className={c(
              'cursor-pointer border-border-light-gray md:border-l text-sm md:text-base text-center p-4 md:p-8 md:w-2/6 font-extralight',
              selectedSolution.includes(solution3) && 'font-bold'
            )}
          >
            {solution3}
          </p>
        </div>

        <div className='mt-16 flex flex-row justify-center'>
          <Button type='submit' disabled={isLoading} onClick={handleSubmit}>
            {isLoading ? 'Submitting...' : 'Request a demo'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export { RequestForm };
