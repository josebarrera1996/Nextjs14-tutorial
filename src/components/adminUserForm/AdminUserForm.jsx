"use client";

import { useFormState } from "react-dom";
import { addUser } from "@/lib/actions";
import styles from './adminUserForm.module.css';

// Componente para representar el formulario para crear un nuevo User
const AdminUserForm = () => {
  // Definiendo el hook para manejar los estados de éxito o de error con los datos del formulario
  // Y para indicar la 'action' que se ejecutará y cual será el estado inicial
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {/* En caso de error */}
      {state?.error && <p className={styles.error_message}>{state.error}</p>}
    </form>
  );
};

export default AdminUserForm;