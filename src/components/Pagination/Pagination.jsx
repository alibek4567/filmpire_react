import React from 'react';

import { DivContainer, PageNumber, StyledButton } from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <DivContainer>
      <StyledButton onClick={handlePrev} variant="contained" color="primary" type="button">Prev</StyledButton>
      <PageNumber variant="h4">
        {currentPage}
      </PageNumber>
      <StyledButton onClick={handleNext} variant="contained" color="primary" type="button">Next</StyledButton>
    </DivContainer>
  );
};

export default Pagination;
