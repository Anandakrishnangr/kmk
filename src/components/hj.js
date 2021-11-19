import React from "react";

export function kart() {
  const [Cheese, setCheese] = useState(0)
  const [milk, setMilk] = useState(0)
  const [tomato, setsetTomato] = useState(0)

  
  useEffect(() => {
    var item = Cheese + milk + tomato
    var total = Cheese * 5 + milk * 10 + tomato * 23
  })

  return (
    <div>

      
      <button onClick={() => setCheese(Cheese + 1)}>Milk </button>
      <button onClick={() => setTomato(tomato + 1)}>Tomato</button>
      <button onClick={() => setMilk(milk + 1)}>Cheese</button>

cart :{item}
amount :{total}

    </div>
  )

}