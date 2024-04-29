import { Suspense } from "react";
import { auth } from "@/lib/auth";
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';
import AdminPosts from '@/components/adminPosts/AdminPosts';
import AdminUserForm from '@/components/adminUserForm/AdminUserForm';
import AdminUsers from '@/components/adminUsers/AdminUsers';
import styles from './admin.module.css';

// Componente que nuclea a los User & Post (solo para Admins)
const AdminPage = async () => {

    // Obteniendo la 'session' del User logeado
    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    {/* Pasando el id del User */}
                    <AdminPostForm userId={session.user.id} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserForm />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;