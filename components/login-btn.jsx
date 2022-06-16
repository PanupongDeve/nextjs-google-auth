import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  const fullData = useSession()
  console.log('session', session)
  console.log('fullData', fullData)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        { session.user.name} <br />
        <img src={session.user.image} /> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}