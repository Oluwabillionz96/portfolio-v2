import { Control, Controller } from "react-hook-form";
import z from "zod";
import { formSchema } from "../contact-section";
import { Field, FieldError, FieldLabel } from "./field";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { cn } from "@/lib/utils";

const ControlledInput = ({
  control,
  name,
  id,
  label,
  type = "input",
}: {
  control: Control<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
  id: string;
  type?: "input" | "textarea";
  label: string;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel
            htmlFor={id}
            className="text-xs font-bold font-space uppercase"
          >
            {label}
          </FieldLabel>
          {type === "textarea" ? (
            <Textarea
              {...field}
              id={id}
              className={cn(
                "lg:h-28 md:h-20 h-14 resize-none rounded-none border-0 border-b-2 font-medium lg:text-3xl md:text-xl text-lg focus:outline-none",
                fieldState.invalid ? "border-red-500" : "border-black",
              )}
            />
          ) : (
            <Input
              {...field}
              id={id}
              data-invalid={fieldState.invalid}
              className={cn(
                "lg:h-14 md:h-10 h-8 rounded-none border-0 border-b-2 font-medium lg:text-3xl md:text-xl text-lg focus:outline-none",
                fieldState.invalid ? "border-red-500" : "border-black",
              )}
            />
          )}
          {fieldState.invalid && (
            <FieldError className="text-xs" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default ControlledInput;
