import styles from "../../styles/user.module.css";
import Image from "next/image";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();
  return {
    props: {
      user: data,
    },
  };
};

const User = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src="/cactus1.jpg"
          width={500}
          height={500}
        />
        <div className={styles.content}>
          <div className={styles.info}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
          </div>
          <div className={styles.info}>
            <h3>Contact:</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
          <div className={styles.info}>
            <h3>Company:</h3>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
          <button className={styles.btn}>Add to Card</button>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dicta
            nostrum labore facere voluptatum accusamus iusto libero tempore,
            voluptates molestias numquam est nulla eos possimus suscipit fugiat
            nesciunt debitis accusantium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
