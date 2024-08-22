const CheckBox = ({
  children,
  className,
}:{
  children: React.ReactNode;
  className: string;
}
) => {
  return (
    <>
    <span className={className}>
      <input className={className} type="checkbox" />
      <label>{children}</label>
    </span>

    </>
  )
}
export default CheckBox;