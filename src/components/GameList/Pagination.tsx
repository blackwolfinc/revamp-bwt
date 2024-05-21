import { motion } from 'framer-motion';

const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage } :any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;
  const maxPageNumbersToShow = 10;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <motion.li
          key={i}
          className='page-item'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            onClick={(e) => { e.preventDefault(); paginate(i); }}
            href='!#'
            className={`page-link py-2 px-3 rounded-lg cursor-pointer transition duration-300 ${
              currentPage === i ? 'bg-white text-gray-700' : 'bg-gradient-to-r from-gray-500/30 to-gray-800 text-white bg-opacity-50 hover:bg-white hover:text-gray-900'
            }`}
          >
            {i}
          </a>
        </motion.li>
      );
    }
    return pages;
  };

  return (
    <nav className="mt-4 z-50">
      <ul className='pagination flex flex-wrap justify-center space-x-2'>
        <motion.li className='page-item' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a
            onClick={(e) => { e.preventDefault(); paginate(1); }}
            href='!#'
            className='page-link py-2 px-3 rounded-lg bg-gradient-to-r from-gray-500/30 to-gray-800 text-white bg-opacity-50 hover:bg-white hover:text-gray-900'
          >
            First
          </a>
        </motion.li>
        <motion.li className='page-item' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a
            onClick={(e) => { e.preventDefault(); paginate(Math.max(1, currentPage - 1)); }}
            href='!#'
            className='page-link py-2 px-3 rounded-lg bg-gradient-to-r from-gray-500/30 to-gray-800 text-white bg-opacity-50 hover:bg-white hover:text-gray-900'
          >
            Prev
          </a>
        </motion.li>
        {renderPageNumbers()}
        <motion.li className='page-item' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a
            onClick={(e) => { e.preventDefault(); paginate(Math.min(totalPages, currentPage + 1)); }}
            href='!#'
            className='page-link py-2 px-3 rounded-lg bg-gradient-to-r from-gray-500/30 to-gray-800 text-white bg-opacity-50 hover:bg-white hover:text-gray-900'
          >
            Next
          </a>
        </motion.li>
        <motion.li className='page-item' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a
            onClick={(e) => { e.preventDefault(); paginate(totalPages); }}
            href='!#'
            className='page-link py-2 px-3 rounded-lg bg-gradient-to-r from-gray-500/30 to-gray-800 text-white bg-opacity-50 hover:bg-white hover:text-gray-900'
          >
            Last
          </a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Pagination;
