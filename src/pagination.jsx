import React from 'react';
import _ from 'lodash'; 
import "./paginationStyle.css"

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);


    return ( 
        <nav>
            <ul className="pagination mt-4">
                {pages.map(page => (
                    <li key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
                        <a style={{cursor: "pointer"}}className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;