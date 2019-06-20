/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const listItems = document.querySelectorAll(".student-item"); // stores the student list item elements in the student list. 
const itemsPerPage = 10;                                        // stores the number of items to show on each “page”

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
   /*
   1. Determine how many pages are needed for the list by dividing the
   total number of list items by the max number of items per page */
      const totalPages =  Math.ceil(list.length / itemsPerPage);
   /*
   2. Create a div, give it the “pagination” class, and append it to the .page div */
      const div = document.createElement('div');
      const pageDiv = document.querySelector('.page');
      

      div.className = "pagination";  //might crash
      //div.setAttribute('class', 'pagination');      


      pageDiv.appendChild(div); 

   /*
   3. Add a ul to the “pagination” div to store the pagination links */
      const ul = document.createElement('ul');       
      div.appendChild(ul); 
   
   /*
   4. for every page, add li and a tags with the page number text */ 
      for (let i = 1; i <= totalPages; i++) {
         let li = document.createElement('li');
         let a = document.createElement('a');
   //Each LI element should contain an A element
         li.appendChild(a);
         ul.appendChild(li);  

 /*  
   Each LI element should contain an A element with an href attribute of #,
   and text set to the page number each link will show. First link is 1. Second link is 2. And so on. */
         a.setAttribute('class','pagination'); //test 
         a.innerText = i;
  /*
   5. Add an event listener to each a tag. When they are clicked
   call the showPage function to display the appropriate page */
         a.addEventListener("click", (e) => {
            showPage(list, i);     // test

            const whenClicked = e.target;
            const paginatLinkz = document.querySelectorAll('.pagination'); //test
  /*
   6. Loop over pagination links to remove active class from all links */
            for(let i = 0; i < paginatLinkz; i++) {
               let link = paginatLinkz[i];

   /*
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   */
            
            }
            
         });  

       
      }      
   }

   appendPageLinks(listItems);
        
  




 


/*
const appendPageLinks = ( list ) => {                       // This function generates, appends, and adds fuctionality to the pagination buttons
   let totalPages =  Math.ceil(list.length / itemsPerPage); // this determines how many pages are needed for the list by dividing the total number of list items by the max number of items per page.
  
   let div = document.createElement('div');                 // I created a div element.
   div.style.display = "pagination";                        // This gives it the "pagination" class.
   document.querySelector(".page").appendChild(div);        // The div appends to the page class. 
 
   let ul = document.createElement('ul');                   // I created a UL element.
   div.appendChild(ul);                                     // This adds UL to my "pagination" div.

   for (let i = 1; i <= totalPages; i++) {                  // this for loop adds li and a tags with the page number text for every page.
      let li =  document.createElement('li');               // I created the li element.
      let a = document.createElemtent('a');                 // I created the a element.

      li.appendChild(a);                                    // This adds the a element to the li element
      ul.appendChild(li);                                   // This adds the li element to ul element.

      //Each LI element should contain an A element with an href attribute of #, 
      a.textContent = `${i}`;
      a.href = "#";
   //Add the active class name to the first pagination link initially.
      a.className = 'active';
   }






  // 5. Add an event listener to each a tag. When they are clicked
  // call the showPage function to display the appropriate page
      ul.addEventListener('click', (e) => {
         
         for(let j = 1; j <= pageClass; j++){
            if (li[j].className === 'active'){
               li[j].className = 'inactive';
             } else {
               li[j].className = 'active';
             }            
         }

      showPage();
            
      });

   
// 6. Loop over pagination links to remove active class from all links

//look up event listeners and how to add the for multiple links 



  // 7. Add the active class to the link that was just clicked. You can identify that
   //clicked link using event.target
  // a.target.className.appendChild(pageClass.className);


*/
