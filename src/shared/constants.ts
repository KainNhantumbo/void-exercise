import { Post } from "../types";

export const initialDraft = { text: '', image: '', video: '' }

export const postInitialData: Post[] = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    body: "Exploring the new features of TypeScript 4.0! From optional chaining to improved type inference, this version offers powerful tools for writing cleaner and more maintainable code. It's a must-learn for anyone serious about modern JavaScript development.",
    createdAt: '2024-05-01T10:00:00Z',
    needToSync: false
  },
  {
    id: '2',
    user: {
      name: 'Jane Smith',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    body: 'React hooks have transformed the way I write components. With useState and useEffect, managing state and side effects has never been easier. Hooks enable functional components to be as powerful as class components, making code more readable and reusable.',
    createdAt: '2024-05-02T11:30:00Z',
    needToSync: true
  },
  {
    id: '3',
    user: {
      name: 'Alice Johnson',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
    },
    body: 'Node.js is a game-changer for server-side JavaScript. Its non-blocking, event-driven architecture makes it perfect for building scalable network applications. With a vast ecosystem of libraries, Node.js has revolutionized backend development.',
    createdAt: '2024-05-03T12:45:00Z',
    needToSync: false
  },
  {
    id: '4',
    user: {
      name: 'Bob Brown',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    },
    body: "CSS Grid makes complex layouts so much easier to create. With a two-dimensional grid system, it allows developers to design responsive web layouts without having to rely heavily on floats and positioning. It's a revolutionary tool for modern web design.",
    createdAt: '2024-05-04T14:15:00Z',
    needToSync: true
  },
  {
    id: '5',
    user: {
      name: 'Eve King',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    },
    body: "Building REST APIs with Express is both simple and powerful. Express provides a minimalistic framework for creating robust APIs, with features like middleware support, routing, and easy integration with databases. It's essential for backend developers.",
    createdAt: '2024-05-05T15:30:00Z',
    needToSync: false
  },
  {
    id: '6',
    user: {
      name: 'Frank Harris',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    body: "JavaScript ES6 features make coding more efficient and fun. With new syntax like arrow functions, template literals, and destructuring, along with powerful concepts like modules and promises, ES6 has significantly enhanced JavaScript's capabilities.",
    createdAt: '2024-05-06T16:45:00Z',
    needToSync: true
  },
  {
    id: '7',
    user: {
      name: 'Grace Lee',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    body: 'Flexbox is essential for creating responsive web designs. It allows for efficient layout structures that adjust to different screen sizes with ease. By using properties like justify-content, align-items, and flex-direction, developers can build fluid layouts.',
    createdAt: '2024-05-07T18:00:00Z',
    needToSync: false
  },
  {
    id: '8',
    user: {
      name: 'Henry Adams',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    body: "Vue.js is a fantastic framework for building user interfaces. Its reactivity system, component-based architecture, and intuitive API make it a joy to work with. Whether you're building small widgets or large-scale applications, Vue.js provides the tools you need.",
    createdAt: '2024-05-08T19:15:00Z',
    needToSync: true
  }
];
