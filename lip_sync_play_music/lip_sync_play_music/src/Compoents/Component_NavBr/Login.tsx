export type User = { name: string; registrationStatus: string };
type BannerProps = {
  type: 'success' | 'error';
  children: React.ReactNode;
};
export function Banner({ type, children }: BannerProps) {
  const backgroundColor = type === 'success' ? 'green' : 'red';
  // if (user.registrationStatus === 'unverified') {
  //   return null;
  // }

  return <div style={{ backgroundColor }}>{children}</div>;
}

type AuthRequiredProps = { user: User; children: React.ReactNode };
export function AuthRequired({ user, children }: AuthRequiredProps) {
  if (user.registrationStatus === 'unverified') {
    return null;
  }

  return children;
}

const USER: User = {
  name: 'Andro',
  registrationStatus: 'verified',
};
export default function Login() {
  return (
    <>
      <h1>lip Sync Play Music</h1>
      <AuthRequired user={USER}>
        <Banner type="success">Login Exitoso! Bienvenido, {USER.name}!</Banner>
      </AuthRequired>
    </>
  );
}
