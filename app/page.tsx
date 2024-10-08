import * as actions from "@/actions";
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth();

    return (
        <div>
            <form action={actions.signIn}>
                <button type="submit">Sign In</button>
            </form>

            <form action={actions.signOut}>
                <button type="submit">Sign Out</button>
            </form>

            {session?.user ? (
                <div>{JSON.stringify(session.user)}</div>
            ) : (
                <div>Signed Out</div>
            )}
        </div>
    );
}
