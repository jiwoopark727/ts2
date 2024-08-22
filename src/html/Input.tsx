const Input = ({
  className,
  children,
}:{
  className:string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <input className={`${className} m-auto text-xs w-52 h-8`} type="text"  placeholder={`${children}`}/>
    </>
  )
}
export default Input;