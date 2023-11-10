
export default function Section({ children,bg,id,padding,height }) {
  return (
    <>
      <div
        className={`${bg} ${padding} ${height} relative w-full flex justify-center items-center `}
        id={id}
      >
        {children}
      </div>
    </>
  );
}
