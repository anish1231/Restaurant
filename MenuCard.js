import React from 'react';

const MenuCard = ({menuData}) => {
    //console.log(menuData);
  return (
    <>  
        <section className="main-card--cointainer">
         {menuData.map((curElem) => {
           const {id, name, category, image, description} = curElem;

             return (
                <>
                <div className="card-container" Key={id}>
                    <div className="card">
                    <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span className="card-auther subtle">{name}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                       {description} 
                    </span>
                    <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="image" className="card-media" /> 

                    <span className="card-tag subtle">order now</span>

                </div> 
            </div>
            </>
             )
         })}
        </section>
    </>
  );
};

export default MenuCard;