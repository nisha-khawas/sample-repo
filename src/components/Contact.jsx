export default function Contact() {
  const handleData = () => {};
  return (
    <div>
      <button
        onClick={() => {
          console.log("Ram");
          handleData();
        }}
      >
        Get Data
      </button>
    </div>
  );
}
