import React from 'react';
import Feature from '../Feature/Feature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Card = ({ card }) => {
    const { id, image, features, name, published_in } = card;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-2xl">
                <figure><img className='w-100' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='font-bold'>Feature:</h1>
                    <ol className="list-decimal ms-4 pt-4">
                        {
                            features.map(feature => <Feature
                                key={feature.id}
                                feature={feature}
                            > </Feature>)
                        }
                    </ol>
                    <hr className='border-1 bg-black'></hr>
                   
                    <h1 className='font-bold text-2xl'>{name}</h1>
                    <div className='flex justify-between'>
                        <div>
                            <FontAwesomeIcon icon={faCalendar} /><span className='ms-3'>{published_in}</span>
                        </div>
                        <div>
                            <span className='ms-3'><FontAwesomeIcon icon={faArrowRight} /> </span>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Card;