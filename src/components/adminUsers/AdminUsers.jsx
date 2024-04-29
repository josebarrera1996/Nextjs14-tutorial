import Image from "next/image";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";
import styles from './adminUsers.module.css';

// Componente que representará la lista de los User
const AdminUsers = async () => {
  // Obteniendo los User
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;