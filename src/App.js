import "./styles.css";

const products = [
  { title: "Poisson", isFruit: false, id: 1 },
  { title: "Viande", isFruit: false, id: 2 },
  { title: "Poulet", isFruit: true, id: 3 }
];

export default function App() {
  const listItems = products.map((a) => (
    <li
      key={a.id}
      style={{
        color: a.isFruit ? "blue" : "orange"
      }}
    >
      {a.title}
    </li>
  ));

  return <ul className="App">{listItems}</ul>;
}
