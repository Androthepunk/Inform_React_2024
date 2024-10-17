import { ComponentProps, Dispatch } from 'react';

type TextInputProps = ComponentProps<'input'> & {
  label: string;
};
function TextInput({ label, ...delegated }: TextInputProps) {
  return (
    <div>
      <label htmlFor={delegated.id}>{label}</label>
      <input {...delegated} />
    </div>
  );
}

type Prop_log ={ 
  email: string,
  setEmail:Dispatch<React.SetStateAction<string>> }

function LoginForm({email,setEmail}:Prop_log) {
  

  function handleSubmit() {
    alert(`Logged in with ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
      />
      <button>Iniciar sesión</button>
    </form>
  );
}

export default LoginForm