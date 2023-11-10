export default function Input({type,placeholder,name}) {
  return (
    <input
      type={type}
      className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border-none py-4 px-6 rounded-md"
      placeholder={placeholder}
      name={name}
    />
  );
}
