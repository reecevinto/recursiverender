export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Gallery />
      <Gallery />
      <Gallery />
    </section>
  );
}
function Image() {
  return (
    <img
      src="https://i.imgur.com/ZFs192.jpg"
      alt="'Floralis Generica' by Eduardo Catalano: a gigantic metallic flower sculpture a reflective petals"
    />
  );
}
