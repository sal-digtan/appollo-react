import React, { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {

      const response = await fetch('https://dummyjson.com/products')
      if (!response.ok) {
        // oups! something went wrong
        console.log(response);
        return;
      }

      const products = await response.json();
      setProducts(products);
    }

    loadProducts();
  }, [])

  useEffect(() => {
    async function loadPosts() {

      const response = await fetch('http://localhost/gatsby-test-app/wpcms/wordpress-6.7.1/wordpress/wp-json/wp/v2/posts')
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, [])
  return (
    <>
      {
        posts.map(post =>
          <div key={post.id}>
            <div>
              <div style={{ margin: 20 }}>{post.id}</div>
              <div style={{ margin: 20 }}>{post.date}</div>
              <div style={{ margin: 20 }}>{post.slug}</div>
              <div style={{ margin: 20 }}>{post.status}</div>
              <div style={{ margin: 20 }}>{post.type}</div>
              <div style={{ margin: 20 }}>{post.title.rendered}</div>
              <div style={{ margin: 20 }}>{post.content.rendered}</div>
            </div>
          </div>
        )
      }
      {/* <div>
        {products.map(product =>
          <div key={product.id}>
            <div>{product.id}</div>
            <div>{product.title}</div>
          </div>)}
      </div> */}

    </>
  );
}

