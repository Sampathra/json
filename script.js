let box = document.getElementById("box");
let fetchData = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach((val) => {
      box.insertAdjacentHTML(
        "beforeend",
        `<tr>
            <td>${val.userId}</td>
            <td>${val.id}</td>
            <td>${val.title}</td>
            <td>${val.body}</td>
            </tr>`
      );
    });
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
fetchData();
