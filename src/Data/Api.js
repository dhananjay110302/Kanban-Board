// api.js

export const fetchKanbanData = () => {
    return fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  