export type User = { email: string; registrationStatus: string };
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

