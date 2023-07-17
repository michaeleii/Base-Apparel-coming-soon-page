import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ArrowIcon from "./ArrowIcon";
import ErrorIcon from "./ErrorIcon";

const schema = z.object({
  email: z.string().email({
    message: "Please provide a valid email",
  }),
});

type Schema = z.infer<typeof schema>;

function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onsubmit = (data: Schema) => {
    alert(`We will send an email to ${data.email} when we launch`);
  };
  return (
    <form className="relative" onSubmit={handleSubmit(onsubmit)}>
      <input
        type="text"
        {...register("email")}
        placeholder="Email Address"
        className={` w-full rounded-full p-3 pl-5 ring-1 ${
          errors.email?.message
            ? "ring-2 ring-[hsl(0_93%_68%)]"
            : "ring-[hsl(0_36%_70%)]"
        } placeholder:text-[hsl(0_36%_70%)] focus:outline-none `}
      />
      {errors.email?.message && (
        <>
          <p className="p-3 text-left text-sm text-[hsl(0_93%_68%)]">
            {errors.email.message}
          </p>
          <div className="absolute right-24 top-3">
            <ErrorIcon />
          </div>
        </>
      )}
      <button className="absolute right-[-3px] top-[-2px] rounded-full bg-gradient-to-r from-[hsl(0_80%_86%)] to-[hsl(0_74%_74%)] px-8 py-4 transition-all hover:to-[hsl(0_80%_86%)] hover:drop-shadow-xl">
        <ArrowIcon />
      </button>
    </form>
  );
}
export default EmailForm;
