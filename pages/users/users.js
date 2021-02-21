import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/users.module.css";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Users</h2>
      <ul className={styles.grid}>
        {users.map((user) => (
          <>
            <li key={user.id}>
              <Image
                className={styles.image}
                src="/cactus1.jpg"
                width={400}
                height={300}
              />
              <Link href={`/users/${user.id}`}>
                <a>
                  <h5>{user.name}</h5>
                </a>
              </Link>
              <div className={styles.content}>
                <div className={styles.info}>
                  <p>Company name: </p>
                  <p>{user.company.name}</p>
                </div>
                <div className={styles.info}>
                  <p>City:</p>
                  <p>{user.address.city}</p>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Users;
