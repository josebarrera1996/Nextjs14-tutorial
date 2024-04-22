import { addPost, deletePost } from "@/lib/actions";

// Componente para testear 'Server Actions'
const ServerActionTestPage = () => {
    // const actionInComponent = async () => {
    //     'use server';
    //     console.log('Hello World!');
    // }

    return (
        <div>
            {/* Añadiendo usuarios */}
            <form action={addPost}>
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="desc" name="desc" />
                <input type="text" placeholder="slug" name="slug" />
                <input type="text" placeholder="userId" name="userId" />
                <button>Create</button>
            </form>
            {/* Eliminando usuarios */}
            <form action={deletePost}>
                <input type="text" placeholder="postId" name="id" />
                <button>Delete</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage;