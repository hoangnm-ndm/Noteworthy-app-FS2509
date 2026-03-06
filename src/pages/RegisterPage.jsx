import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAuthSchema } from "../schemas/authSchema";

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerAuthSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="flex justify-center w-full py-16 bg-slate-100/50">
      <div className="w-full max-w-md p-8 bg-white border shadow-xl rounded-2xl">
        <h2 className="mb-2 text-2xl font-bold">Register Now!</h2>

        <p className="mb-6 text-sm text-slate-500">
          Đăng ký trải nghiệm ngay ghi chú thông minh sử dụng AI!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email Address"
            type="email"
            placeholder="name@gmail.com"
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            {...register("password")}
            error={errors.password?.message}
          />

          <Button className="w-full h-12 mt-4 text-white bg-primary">
            Continue with Email
          </Button>
        </form>
      </div>
    </section>
  );
}
