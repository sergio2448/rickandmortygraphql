import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Episode from './Episode';
import { EPISODES } from '../queries';

function Episodes() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState({name:""})
  const { error, data } = useQuery(EPISODES, {
    variables: { page: page, filter: name },
  });

  const handleName = (e) => {
    name.name = e.target.value
    console.log(name, 'uno');
    setName({...name});
  };

  if (error) {
    try {
      return <p>Error: {error.networkError.result.errors[0].message}</p>;  
        } catch (error) {
      return <p>No results</p>;
        }
  }

  return (
    <div className="container">
      <h2 className="my-5 text-center">
        {data ? `${data.episodes.info.count} records found` : ''}
      </h2>
      <div class="form-group">
        <input class="form-control mr-sm-2"
               type="search"
               placeholder="Search Character"
               aria-label="Search"
               value={name.name}
               onChange={handleName}
         />
      </div>

      <div className="row">
        {data &&
          data.episodes.results.map((episode) => (
            <Episode key={episode.id} episode={episode} />
          ))}
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={(event) => setPage(event.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={data?.episodes.info.pages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Episodes;
