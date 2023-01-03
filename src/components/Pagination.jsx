import React from 'react';
import './Pagination.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1);
            goToTop();
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1);
        goToTop();
    }
    return (
        <section>
            <ul className="pagination">
                <li className="page-item">
                    <button className="previous" 
                        onClick={prevPage} >
                        
                        Previous
                    </button>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage === pgNumber ? 'active' : ''} `} >

                        <button onClick={() => {
                            setCurrentPage(pgNumber);
                            goToTop();
                        }}  
                            className='page-link' >
                            
                            {pgNumber}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button className="next" 
                        onClick={nextPage} >
                        
                        Next
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Pagination;