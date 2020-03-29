import React from 'react';
import classNames from 'classnames';

const Pagination = (props) => {
  const {page, total_pages, switchPage} = props;

  const handleClick = (page) => () => {
    return switchPage(page);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={classNames("page-item", {"disabled": (page === 1)})}>
          <div 
            className="page-link"
            onClick={handleClick(page - 1)}
          >
            Previous
          </div>
        </li>
        {page !== 1 && page > 3 &&
        <li className="page-item">
          <div className="page-link" onClick={handleClick(1)}>1</div>
        </li>}
        {page > 3 && total_pages > 5 &&
        <li className="page-item disabled">
          <div className="page-link" >...</div>
        </li>}
        {page > 2 &&
        <li className="page-item">
          <div 
            className="page-link"
            onClick={handleClick(page - 2)} 
          >
            {page - 2}
          </div>
        </li>}
        {page > 1 &&
        <li className="page-item">
          <div 
            className="page-link"
            onClick={handleClick(page - 1)}
          >
            {page - 1}
          </div>
        </li>}
        <li className="page-item active"><div className="page-link"  onClick={(e) => {e.preventDefault()}}>{page}</div></li>
        {(page < total_pages - 1) &&
        <li className="page-item">
          <div 
            className="page-link" 
            onClick={handleClick(page + 1)}
          >
            {page + 1}
          </div>
        </li>}
        {(page < total_pages - 2) &&
        <li className="page-item">
          <div 
            className="page-link" 
            onClick={handleClick(page + 2)}
          >
            {page + 2}
          </div>
        </li>}
        {(page < total_pages - 3) && total_pages > 5 &&
        <li className="page-item disabled">
          <div className="page-link" >...</div>
        </li>}
        {(page < total_pages - 3) && page !== total_pages &&
        <li className="page-item">
          <div 
            className="page-link"
            onClick={handleClick(total_pages)}  
          >
              {total_pages}
          </div>
        </li>}
        <li className={classNames("page-item", {"disabled": (page === total_pages)})}>
          <div 
            className="page-link" 
            onClick={handleClick(page + 1)}
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  );

}

export default Pagination;