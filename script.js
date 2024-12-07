function generateTable() {
  const table_index = document.querySelector("#table_key_value").value
  const div_table = document.querySelector(".table")
  div_table.innerHTML = ""

  for(let i = 0; i <= 10; i++){
    const contentText = `${table_index} x ${i} = ${table_index * i}`
    const span = document.createElement("spam");
    const contentSpan = document.createTextNode(contentText);
    span.appendChild(contentSpan);

    div_table.appendChild(span)
  }
}