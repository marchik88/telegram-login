import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log('session', session)
  if (!session) {
    return (
      <div>
        <h1>Not logged in to see what is here</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>You can see this because you are logged in.</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
