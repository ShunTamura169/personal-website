import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ダミーのブログ記事データ
const blogPosts = [
  { id: 1, title: 'Getting Started with Next.js', date: '2024-06-01', content: 'Learn how to set up your first Next.js project and explore its key features. Next.js is a powerful React framework that enables you to build server-side rendered and statically generated web applications with ease.' },
  { id: 2, title: 'Mastering Tailwind CSS', date: '2024-05-15', content: 'Dive deep into Tailwind CSS and discover how to create stunning designs efficiently. Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces without writing custom CSS.' },
  { id: 3, title: 'The Power of TypeScript in React', date: '2024-04-30', content: 'Explore how TypeScript can improve your React development experience and catch errors early. TypeScript adds static typing to JavaScript, making your code more robust and easier to maintain in large-scale applications.' },
  { id: 4, title: 'Advanced React Hooks', date: '2024-04-15', content: 'Take your React skills to the next level by mastering advanced hooks and custom hook creation. React Hooks allow you to use state and other React features without writing a class, simplifying your components and making them easier to understand and test.' },
  { id: 5, title: 'Optimizing Next.js Performance', date: '2024-04-01', content: 'Learn techniques to optimize your Next.js application for better performance and user experience. Discover how to leverage Next.js features like automatic code splitting, prefetching, and image optimization to create lightning-fast web applications.' },
  { id: 6, title: 'Building Accessible Web Apps', date: '2024-03-15', content: 'Discover best practices for creating web applications that are accessible to all users. Learn how to implement ARIA attributes, ensure keyboard navigation, and create inclusive designs that cater to users with various disabilities.' },
];

const BlogSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="blog" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Blog Posts</h2>
        <Slider {...settings}>
          {blogPosts.map((post) => (
            <div key={post.id} className="px-2">
              <div className="bg-white rounded-lg shadow-md p-6 h-full overflow-y-auto" style={{maxHeight: '400px'}}>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-600">{post.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSlider;