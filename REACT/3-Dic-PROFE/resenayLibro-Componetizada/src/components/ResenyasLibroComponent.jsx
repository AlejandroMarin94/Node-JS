import React from 'react'

const ResenyasLibroComponent = () => {

    const reviewList = [
        {
            name: "Eda",
            review: "Aliquam assumenda dignissimos eum quo ut similique sapiente. Et et tempore debitis praesentium pariatur ad eum. Autem a sed sit eos quasi assumenda. Consequatur sint suscipit eos eaque assumenda.",
            created_at: "2024-04-22T16:46:57.725Z"
        },
        {
            name: "Morris",
            review: "Perspiciatis qui reiciendis quidem adipisci saepe nihil soluta. Repudiandae maxime ut id. Consequatur aut dolor totam voluptatem sunt ut veritatis. Voluptates minus enim quos.",
            created_at: "2024-03-13T18:32:11.309Z"
        },
        {
            name: "Timmy",
            review: "Porro libero eaque quasi voluptates suscipit maxime officiis nesciunt. Possimus ea est qui fuga ea enim consequatur voluptatibus. Quas qui quisquam iusto. Sunt similique optio. Molestiae et aut iusto itaque dignissimos id doloremque sit error. Illum voluptatibus natus incidunt minus ratione quod et debitis debitis.",
            created_at: "2023-11-07T17:20:35.883Z"
        },
        {
            name: "Maud",
            review: "Rerum autem omnis. Perspiciatis qui recusandae est ratione accusamus. Deleniti animi omnis dolorem maiores delectus eveniet et fugiat. Fugiat et sed sapiente voluptatum voluptatem quis et laborum.",
            created_at: "2024-06-27T15:13:02.845Z"
        }
    ]
    
  return (
    <div>
        <h2>Reseñas</h2>
        {
            reviewList.map((review, index) => (
                <div key={index}>
                    <p>Name: {review.name}</p>
                    <p>Date: {review.created_at}</p>
                    <p>Review: {review.review}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ResenyasLibroComponent