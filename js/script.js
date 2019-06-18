/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const listItems = document.querySelectorAll(".student-item"); // stores the student list item elements in the student list. 
let itemsPerPage = 9; // stores the number of items to show on each “page”

//console.log(listItems);

const showPage = (list, page) => { // this function hides all of the items in the list except for the ones i want to show 
   let startIndex = (page * itemsPerPage) - itemsPerPage; // this times which ever page by how any items i want per page then subtracts the items so that the first item equals the first item i want to show 
   let endIndex = page * itemsPerPage;            // this times the page by items per page so that the last item i want shown shows
   for (let index = 0; index < list.length; index++) { // in this for loop index will represent the item on the page. this loop will run until it reaches desired list length. 
      if (index >= startIndex && index <= endIndex) { // this if statement will give me the number of items i want on the page.
         list[index].style.display = "block"; // block will keep items i want on the page
      } else {
         list[index].style.display = "none"; //none will hide the items i dont want on the specifc page
      }
   }
}

showPage(listItems, 1); // call showPage() carries the parameters list and page. `list` will be the desired variable that carries a list. and page will be the desired page number. 




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = ( list ) => {
   /*
   1. Determine how many pages are needed for the list by dividing the
   total number of list items by the max number of items per page */
   let totalPages =  Math.ceil(list.length / itemsPerPage);

  // 2. Create a div , give it the “pagination” class, and append it to the .page div
   let div = document.createElement('div');
   div.style.display = "pagination";
   document.querySelectorAll(".page").appendChild("pagination");

   //3. Add a ul to the “pagination” div to store the pagination links
   let ul = document.createElement('ul');
   div.appendChild(ul);

   // 4. for every page, add li and a tags with the page number text
   //Each LI element should contain an A element with an href attribute of #, 
   //and text set to the page number each link will show. First link is 1. Second link is 2. And so on.

   for (let i = 1; i <= totalPages.length; i++) {
      let li =  document.createElement('li');
      let a = document.createElemtent('a');
   // a.setAttribute("href", "#");
      li.appendChild(a);
      ul.appendChild(li);
      a.innerText = i;
   }
   // 5. Add an event listener to each a tag. When they are clicked
  // call the showPage function to display the appropriate page

  // 6. Loop over pagination links to remove active class from all links

  // 7. Add the active class to the link that was just clicked. You can identify that
   //clicked link using event.target
   
}


appendPageLinks(listItems);