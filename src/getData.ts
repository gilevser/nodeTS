const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Comment {
  id: number;
  email: string;
}

const getData = async (url: string): Promise<Comment[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  return await response.json() as Comment[];
}

getData(COMMENTS_URL)
  .then(data => {
    data.forEach(comment => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  })
  .catch(error => {
    console.error('Ошибка при получении данных:', error);
  });