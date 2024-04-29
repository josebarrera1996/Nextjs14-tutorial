"use client";

import { addPost } from '@/lib/actions';
import { useFormState } from "react-dom";
import styles from './adminPostForm.module.css';

// Componente para representar el formulario para crear un nuevo Post
const AdminPostForm = ({ userId }) => {
  // Definiendo el hook para manejar los estados de éxito o de error con los datos del formulario
  // Y para indicar la 'action' que se ejecutará y cual será el estado inicial
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {/* En caso de error */}
      {state?.error && <p className={styles.error_message}>{state.error}</p>}
    </form>
  );
};

export default AdminPostForm;