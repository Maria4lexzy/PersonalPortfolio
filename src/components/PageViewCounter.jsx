/* import React, { useEffect, useState } from 'react';

const PageViewCounter = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    const localCount = localStorage.getItem('pageViews') || 0;
    const newCount = parseInt(localCount) + 1;
    localStorage.setItem('pageViews', newCount);
    setPageViews(newCount);
  }, []);

return (
  <div className="sticky top-0 bg-gray-100 p-4 border border-gray-300 rounded-md">
    Page Views: {pageViews}
  </div>
);
};

export default PageViewCounter; */
