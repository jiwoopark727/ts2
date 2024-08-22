type TInputProps = React.ComponentPropsWithoutRef<"input">;

const Input = (props: TInputProps) => {
  const {...rest} = props;
  return (
    <>
      <input 
        className='inter text-sm border border-[#4f4f4f] py-[13.5px] px-[16px] 
        rounded-lg placeholder-[#acacac]'
        {...rest}
      />
    </>
  )
}
export default Input;