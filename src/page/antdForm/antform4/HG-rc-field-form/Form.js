export default function Form({ children, form, onFinish, onFinishField }) {
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        console.log(1);
      }}
    >
      {children}
    </form>
  );
}
