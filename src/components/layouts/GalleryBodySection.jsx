export default function GalleryBodySection({ children, title,marginTop }) {
  return (
    <div className={`${marginTop} mx-auto text-center  text-blueWhite2 font-poppins md:w-11/12`}>
      <h1 className="md:text-5xl text-3xl  font-medium text-blueWhite2">
        {title}
      </h1>
      <div className="md:mt-16 mt-10 flex flex-wrap justify-center md:gap-10 gap-5">
        {children}
      </div>
    </div>
  );
}
