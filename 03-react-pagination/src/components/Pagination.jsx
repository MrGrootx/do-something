export const Pagination = ({ postsPerPage, totalpost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalpost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number) => {
    paginate(number);
  };

  return (
    <div>
      <nav>
        <ul className="flex justify-center mt-5 gap-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                href="!#"
                onClick={() => {
                  handlePageClick(number);
                  paginate(number);
                }}
                className="border border-gray-600 text-center rounded inline-block p-5"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
