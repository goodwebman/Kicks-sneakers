import { useForm } from 'react-hook-form';
import { Input } from '../../6_shared/ui/input/input';
type FormValues = {
  email: string;
  password: string;
};
export const ProductDetails = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log('FORM DATA:', data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: 400,
        margin: '40px auto',
      }}
    >
      <Input
        name="email"
        title="Email"
        placeholder="Enter your email"
        control={control}
        error={errors.email}
        isError
      />

      <Input
        name="password"
        title="Password"
        placeholder="Enter your password"
        control={control}
        security
        error={errors.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
