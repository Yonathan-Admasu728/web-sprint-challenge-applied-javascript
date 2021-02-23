import axios from "axios"
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
  //let's instantiate and get the heirarchy
  const topic = document.createElement('div')
  const tabJ = document.createElement('div')
  const tabB = document.createElement('div')
  const tabT = document.createElement('div')
//let's append
topic.appendChild(tabJ)
topic.appendChild(tabB)
topic.appendChild(tabT)


  //get some classes and txts
topic.classList.add('topic');
tabJ.classList.add('tabJ')
tabB.classList.add('tabB')
tabT.classList.add('tabT')
topic.textContent = topics
//tabJ.textContent = "jvaScript";
//tabB.textContent = "bootStrap";
//tabT.textContent = "technology"
//return
return topic
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const outpoint = document.querySelector(selector)
 axios.get('https://lambda-times-api.herokuapp.com/topics') 
.then(res => {
   console.log('success');
  const myData = res.data.topics
  myData.forEach(el =>{
    const newVar = Tabs(el)
    outpoint.appendChild(newVar);
  })
})
.catch(console.log('error something went wrong'));

}

export { Tabs, tabsAppender }

