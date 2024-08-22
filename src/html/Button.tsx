import { twMerge } from 'tailwind-merge';

type TButtonProps = React.ComponentPropsWithoutRef<"button">;

// type TButtonProps = {
//   type:"button"|"submit"|"reset"; 
//   name: string;
//   className: string;
//   disabled: boolean;
//   children: React.ReactNode;
// };

const Button = (
  // {
  // type,
  // name,
  // className,
  // disabled,
  // children,}
  props:TButtonProps) => {
  const {children, className, ...rest} = props;
  return (
    <>
      <button 
        // type={type}
        // name={name}
        // disabled={disabled}
        className={twMerge(`inter w-[77px] h-[44px] text-sm text-white font-medium rounded-lg`, className)}
        {...rest}
      >
        {children}
      </button>
    </>
  )
}
export default Button;