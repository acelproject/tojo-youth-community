export default function TextArea({ type, placeholder, name }) {
  return (
    <textarea
      id=""
      cols="30"
      rows="3"
      type={type}
      className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border-none py-4 px-6 rounded-md"
      placeholder={placeholder}
      name={name}
    ></textarea>
  );
}
