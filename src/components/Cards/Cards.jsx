import Button from "components/Button";

import css from "./Cards.module.css";

import CardItem from "./CardItem";

const Cards = () => {
  const data = [
    {
      name: "Dr. Sarah Davis",
      avatar_url: "https://ftp.goit.study/img/avatars/23.jpg",
      experience: "12 years",
      reviews: [
        {
          reviewer: "Michael Brown",
          rating: 4.5,
          comment:
            "Dr. Davis has been a great help in managing my depression. Her insights have been valuable.",
        },
        {
          reviewer: "Linda Johnson",
          rating: 5,
          comment:
            "I'm very satisfied with Dr. Davis's therapy. She's understanding and empathetic.",
        },
      ],
      price_per_hour: 120,
      rating: 4.75,
      license: "Licensed Psychologist (License #67890)",
      specialization: "Depression and Mood Disorders",
      initial_consultation: "Free 45-minute initial consultation",
      about:
        "Dr. Sarah Davis is a highly experienced and licensed psychologist specializing in Depression and Mood Disorders. With 12 years of practice, she has helped numerous individuals overcome their depression and regain control of their lives. Dr. Davis is known for her empathetic and understanding approach to therapy, making her clients feel comfortable and supported throughout their journey to better mental health.",
    },
    {
      name: "Dr. Mark Thompson",
      avatar_url: "https://ftp.goit.study/img/avatars/1.jpg",
      experience: "20 years",
      reviews: [
        {
          reviewer: "Susan Roberts",
          rating: 4.8,
          comment:
            "I've had an excellent experience with Dr. Thompson. His expertise has been invaluable.",
        },
        {
          reviewer: "David Lee",
          rating: 4.6,
          comment:
            "Dr. Thompson's guidance has helped me improve my relationships and well-being.",
        },
      ],
      price_per_hour: 180,
      rating: 4.7,
      license: "Licensed Psychologist (License #54321)",
      specialization: "Relationship Counseling",
      initial_consultation: "Free 60-minute initial consultation",
      about:
        "Dr. Mark Thompson is a highly experienced and licensed psychologist specializing in Relationship Counseling. With 20 years of practice, he has helped individuals navigate and improve their relationships, leading to better well-being and personal growth. Dr. Thompson is known for his expertise and ability to provide invaluable insights to his clients. His approach to therapy is tailored to each individual's unique needs, ensuring a supportive and effective counseling experience.",
    },
  ];

  return (
    data[0] && (
      <section className={css.cards}>
        <ul className={css.cardList}>
          {data.map(item => (
            <CardItem key={item.name} card={item} />
          ))}
        </ul>
        <Button text="Load more" width="176px" onClick={null} />
      </section>
    )
  );
};

export default Cards;
