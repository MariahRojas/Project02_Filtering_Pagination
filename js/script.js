/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const listItems = document.querySelectorAll(".student-item"); // stores the student list item elements in the student list. 
const itemsPerPage = 10;                                      // stores the number of items to show on each “page”


//console.log(listItems);

const showPage = (list, page) => {                          // this function hides all of the items in the list except for the ones i want to show 
   let startIndex = (page * itemsPerPage) - itemsPerPage;   // this times which ever page by how any items i want per page then subtracts the items so that the first item equals the first item i want to show 
   let endIndex = page * itemsPerPage;                      // this times the page by items per page so that the last item i want shown shows
   for (let index = 0; index < list.length; index++) {      // in this for loop index will represent the item on the page. this loop will run until it reaches desired list length. 
      if (index >= startIndex && index < endIndex) {        // this if statement will give me the number of items i want on the page.
         list[index].style.display = "block";               // block will keep items i want on the page
      } else {
         list[index].style.display = "none";                // none will hide the items i dont want on the specifc page   
      }
   }
} 
 
showPage(listItems, 1);                                     // call showPage() carries the parameters list and page. `list` will be the desired variable that carries a list. and page will be the desired page number. 



const appendPageLinks = ( list ) => {
      const totalPages =  Math.ceil(list.length / itemsPerPage);  // this determines how many pages are needed by dividing the total number list items by max number per page.
      const div = document.createElement('div');                  // this creates a div. 
      const pageDiv = document.querySelector('.page');            // this selects the page class so that we can append the div to it 
      div.className = "pagination";                               // this give the div the pagination class
        pageDiv.appendChild(div);                                 // this finally appends the div to the page class 
      const ul = document.createElement('ul');                    // this creates the ul
      div.appendChild(ul);                                        // this stores the pagination links by appending ul to the div
      
      for (let i = 1; i <= totalPages; i++) {                     // this for loop adds li and a tags with the page number for every page
         let li = document.createElement('li');                   // this creates the li element
         let a = document.createElement('a');                     // this creates the a element
         li.appendChild(a);                                       // appends a to li so that all li elements have an a element 
         ul.appendChild(li);                                      // finally we append li to the ul element 
         a.setAttribute('class','pagination');                    // this sets the a attribute to a class pagination 
         a.innerText = i;                                         // i represents the page number. this will be diplayed inside the button

         if(i == 1)                                               // in this conditional statement, if i is equal to 1 then the default page will show the first button highlighted. 
         {
            a.setAttribute('class', "pagination active")
         } 

         a.addEventListener("click", (e) => {                              // this adds an event listerner to each tag
            const whenClicked = e.target;                                  // this represents the a link that was clicked. 
            const paginatLinkz = document.querySelectorAll('.pagination'); // this finds the paginaton class and assigns it to a variable 
            showPage(list, i);                                             // when clicke the showPage function will display the appropriate page

            for(let j = 0; j < paginatLinkz.length; j++) {                 // this for loop loops over pagination links to remove active class from all links 
               let linkz = paginatLinkz[j];                                // this variable will represent the pagination class we selected and the index (if removed all buttons will stay active after being clicked)
               linkz.setAttribute('class', 'pagination');                  // sets the attribute for the variable to an inactive pagination class 
            }
            whenClicked.setAttribute('class', "pagination active");        // when clicked, this button will be active.  
         });  
        }
      }
   
   appendPageLinks(listItems);
        