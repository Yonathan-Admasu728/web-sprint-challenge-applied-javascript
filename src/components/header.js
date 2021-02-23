const Header = (title,date,temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  //let's create each elements and append. 
  const header = document.createElement('div')
  const dateSp = document.createElement('span')
  const title1 = document.createElement('h1')
  const tempSp = document.createElement('span')
  header.appendChild(dateSp)
  header.appendChild(title1)
  header.appendChild(tempSp)
  //let's get some texts
  dateSp.textContent =date;
  title1.textContent = title;
  tempSp.textContent = temp;
  header.classList.add('header')
  dateSp.classList.add('date')
  tempSp.classList.add('temp')
//document.querySelector('.header-container').appendChild(header)
  //return it
  
  return header
  
}

const headerAppender = (selector) => {
console.log(selector)
  const entryPoint = document.querySelector(selector)
  entryPoint.appendChild(Header("Lambda Post","march 29 2021", "72"))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
 // entryPoint
}

export { Header, headerAppender }
