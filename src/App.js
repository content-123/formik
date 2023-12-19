


import './App.css';
import Button from '@mui/material/Button';

import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'author 1', isbn: '123456789', publicationDate: '2022-01-01' , birthDate: '1990-01-01', biography: 'Biography 1' },
    { id: 2, title: 'Book 2', author: 'author 2', isbn: '987654321', publicationDate: '2022-02-01' ,birthDate: '1995-05-05', biography: 'Biography 2' },
  ]);

    
  const formik = useFormik({
    initialValues: { title: '', author: '', isbn: '', publicationDate: '' },
    validationSchema: Yup.object({
      title: Yup.string().required('Book Name is required'),
      author: Yup.string().required('Book Author is required'),
      isbn: Yup.string().required('ISBN is required'),
      publicationDate: Yup.date().required('Publication Date is required'),
      birthDate: Yup.date().required('BirthDate is required'),
      biography: Yup.string().required('Biography is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addBook(values, resetForm);
    },

  });
  
      
  const addBook = (values, resetForm) => {
    setBooks([...books, { id: books.length + 1, ...values }]);
    resetForm();
  };


  const editBooks = (index) => {
    const editedName = prompt('Enter edited book name:', books[index].title);
    const editedDescription = prompt('Enter edited description:', books[index].description);
    const editedIsbn = prompt('Enter edited isbn:', books[index].isbn);
    const editedPublicationDate = prompt('Enter edited date:', books[index].publicationDate);
    const editedbirthDate = prompt('Enter edited date:', books[index].birthDate);
    const editedbiography = prompt('Enter edited date:', books[index].biography);
    const updatedBooks = [...books];
    updatedBooks[index] = {
      ...updatedBooks[index],
      title: editedName,
      author: editedDescription,
      isbn: editedIsbn,
      publicationDate: editedPublicationDate,
      birthDate:editedbirthDate,
      biography:editedbiography
    };

    setBooks(updatedBooks);
};
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <div className="total">
          <div className="App">
      <div className="container">
        <h2 className="head">My Book</h2>
        <form onSubmit={formik.handleSubmit}>
      <span>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
      </span>
   {/* <br/>
   <br/> */}
      <span>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author ? (
          <div>{formik.errors.author}</div>
        ) : null}
      </span>
      {/* <br/>
   <br/> */}
      <span>
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isbn}
        />
        {formik.touched.isbn && formik.errors.isbn ? (
          <div>{formik.errors.isbn}</div>
        ) : null}
      </span>
      {/* <br/>
   <br/> */}
      <span>
        <label htmlFor="publicationDate">Publication Date:</label>
        <input
          type="date"
          id="publicationDate"
          name="publicationDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.publicationDate}
        />
        {formik.touched.publicationDate && formik.errors.publicationDate ? (
          <div>{formik.errors.publicationDate}</div>
        ) : null}
    </span>   
   {/* <br/>
   <br/> */}
 <span>
      <label htmlFor="birthDate">BirthDate:</label>
      <input type="date" id="birthDate" name="birthDate" onChange={formik.handleChange} value={formik.values.birthDate} />
     {formik.errors.birthDate ? <div>{formik.errors.birthDate}</div> : null}
</span>
{/* <br/>
   <br/> */}
<span>
      <label htmlFor="biography">Biography:</label>
      <input type="text" id="biography" name="biography" onChange={formik.handleChange} value={formik.values.biography} />
       {formik.errors.biography ? <div>{formik.errors.biography}</div> : null}
      </span>


<Button variant="contained" size="small" color="success" type="submit"  >AddBook</Button>
    </form>
         
   
        </div>
        

         <div className="heading">
          <p className="mybooks">Books and Authors</p>
         </div>  
        
         <br/>
         <br/>
        <div className="map">
        {books.map((carddisplay, index) => (
  <Card1 key={index} cards={carddisplay} edit={() => editBooks(index)} deleteBook={() => deleteBook(carddisplay.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Card1 ({cards,edit, deleteBook }){
    return(
    
      <div className="card" style={{width: "19rem"}} >
    {/* <img src="..." class="card-img-top" alt="..."/> */}
    <div className="card-body">
      <p className="card-title">{cards.title}</p>
      <p className="card-text">{cards.isbn}</p>
      <p className="card-text">{cards.publicationDate}</p>
      <p className="card-text">{cards.birthDate}</p>
      <p className="card-text">{cards.biography}</p>
     
      <Button variant="contained" size="small" color="success" onClick={edit} >Edit</Button>
      <Button variant="contained" size="small" color="error" onClick={deleteBook}>Delete</Button>
    </div>
  </div>
  
    )
  
    }  
  
export default App;
