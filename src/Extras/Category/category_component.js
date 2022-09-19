import react from 'react';
import './category.css';


function Category(props) {
  return (
    <div className='full_component'>
      <div className='div_icon'>
        <img className='icon' src={props.url}></img>
      </div>
      <h3 className='title'>{props.title}</h3>
      <p className='bodys'>{props.body}</p>
    </div>
  );
}

export default Category;
