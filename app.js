const body = document.querySelector('body');
const chatUsIcon = document.querySelector('.fa-comment-alt');
const closeSpan = document.querySelector('.close-span');
const dashBoard = document.querySelector('.dashboard');
const firstPage = document.querySelector('.first-page');
const formBooking = document.querySelector('.booking-form');
const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const notification = document.querySelector('.notification');
const switchButton = document.querySelector('.switch_button');
let bookings = document.querySelector('.bookings'); //booking class
let bookingSection = document.querySelector('.booking-section');
let boxes = document.querySelectorAll('.box');
let chatTitle = document.querySelector('.chat-title');
let contactHidden = document.querySelector('.contact-hidden');
let hidden = document.querySelector('.hidden');
let lastPallete = document.querySelector('.pallete_4');
let lists = document.querySelectorAll('.list');
let notificationIcon = document.querySelector('.fa-bell');
let notificationTitle = document.querySelector('.notification-title');
let noViews = document.querySelectorAll('.no-view');
let palleteOne = document.querySelector('.pallete_1');
let palleteThree = document.querySelector('.pallete_3');
let palleteTwo = document.querySelector('.pallete_2');
let user = document.querySelector('.user');
let userName = document.querySelector('.user-name');
let topBar = document.querySelector('.topbar');
let palleteContainer = document.querySelector('.pallete_container');
const profile = document.getElementById('Profile');
let myBarChart = document.getElementById('myChart');
let liProfile = document.getElementById("li--profile")
let profileContainer = document.querySelector('.profile--container');
/**
 * the  booking menu implementation start here
 */


liProfile.addEventListener('click', (e)=> {
  firstPage.classList.add('first-page-hidden');
  bookingSection.classList.add('booking-section-hidden');
  profileContainer.classList.remove('prof--container--hidden')
  
})
bookings.addEventListener('click', (event) => {
  firstPage.classList.add('first-page-hidden');
  bookingSection.classList.remove('booking-section-hidden');
  profileContainer.classList.add('prof--container--hidden')
});
/**
 * the  booking menu implementation endshere
 */

// bookings.addEventListener('click', function (event) {
//     const target = event.target.getAttribute("data-target");
//     firstPage.classList.add('first-page-hidden')
//     bookingSection.style.opacity = "1";

// })

// dashBoard.addEventListener("click", () => {
//     firstPage.classList.remove('first-page-hidden')
//     bookingSection.style.display = "none";
// })

/**
 * pallet implementation start here
 */
palleteOne.addEventListener('click', function () {
  menu.classList.toggle('first_menuTheme');
  topBar.classList.toggle('first_menuTheme');
});

palleteTwo.addEventListener('click', function () {
  menu.classList.toggle('second_menuTheme');
  topBar.classList.toggle('second_menuTheme');
});

palleteThree.addEventListener('click', function () {
  menu.classList.toggle('third_menuTheme');
  topBar.classList.toggle('third_menuTheme');
});

// lastPallete.addEventListener('click', () => {
//     menu.classList.toggle('last_menuTheme');
// })
/**
 * pallet implementation ends here
 */

/**
 * the light and theme implementation starts here
 * start here
 */
switchButton.addEventListener('click', function () {
  body.classList.toggle('light-theme');
  if (!body.classList.contains('light-theme')) {
    switchButton.style.marginLeft = '0px';
  } else {
    switchButton.style.marginLeft = '40px';
    // switchButton.style.cssText = 'transform: translateY(-10px)';
    switchButton.style.marginBottom = '0px';
  }
});
/**
 * 
 * 
 * the light and theme implementation 
 * end here...............................
 */
/**
 * implementaion of all graph starts here *******************************************************
 */
/*
let myDouChart = document.getElementById('doughnutChart');
myDouChart.getContext('2d')

const data = {
  labels: [
       'Abia',
       'Abuja',
       'Ado-Ekiti',
       'Delta',
       'Jos',
       'kaduna',
       'Lagos',
       'Portharcourt',
       'Rivers',
  ],
  datasets: [{
    label: 'Some higest visiting states',
    data: [40, 55, 65, 20, 28, 70, 93, 15.5, 89],
    backgroundColor: [

           '#F8333C',
           '#FCAB10',
           '#EE2677',
           '#3B429F',
           '#F75C03',
           '#04A777',
           '#D678A1',
           '#8a07fc',
           '#E86252',
    ],
    hoverOffset: 30,
    borderWidth: 0,
    borderRadius: 5,
    spacing: 15,
    borderAlign: 'center'
    // rotation: 30,
  }]
};

let myNewChart = new Chart(myDouChart, {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text:'Some higest visiting states',
        position: 'top',
        font: {
          size: '25px',
          weight: 600,
        },
        color: '#adadad',
      },
      legend: {
        position: 'top',
        labels: {
          boxWidth: 30,
          color: "#adadad",
          padding: 15,
          font: {
            size: 15,
            family: 'Poppins',
            style: "normal",
            weight: 600,
          }          
        
        }
      }
    },
    layout: {
      padding: 0,
    },
    cutout: '55%',
    radius: "80%",
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    rotation: 1,
  }
  
})*/
const data = {
  labels: [
       'Abia',
       'Abuja',
       'Ado-Ekiti',
       'Delta',
       'Jos',
       'kaduna',
       'Lagos',
       'Portharcourt',
       'Rivers',
  ],
  datasets: [{
    label: 'Some higest visiting states',
    data: [40, 55, 65, 20, 28, 70, 93, 15.5, 89],
    backgroundColor: [

           '#F8333C',
           '#FCAB10',
           '#EE2677',
           '#3B429F',
           '#F75C03',
           '#04A777',
           '#D678A1',
           '#8a07fc',
           '#E86252',
    ],
    barPercentage: 0.6,
    borderRadius: 3,
    // pointStyle: 'star',
    hoverBorderRadius: 5,
    
  }]
};
let chartDefault = (Chart.defaults.color = '#ADADAD');
// let chartDefault = Chart.defaults.color = '#ffffe1';
myBarChart.getContext('2d');
let theChart = new Chart(myBarChart, {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        color: '#ADADAD',
        text: 'A graphical Representation Of The Drive Company',
        font: {
          size: 25,
          family: 'Poppins',
          style: 'italic',
        },
      },
      legend: {
        labels: {
          display: true,
          color: '#adadad',
          font: {
            size: 16,
            style: 'italic',
            family: 'Poppins',
          },
        },
      },
    },
    // scales: {
    //   x: {
    //     grid: {
    //       offSet: true,
    //     }
    //   }
    // }
  },
  

});


/************************
 * implementation of graph ends here ****************************
 */

// console.log(lists);

// [].forEach.call(boxes, box => {
//     box.addEventListener('click', () => {
//      for (let view of noViews) {
//          view.classList.toggle('active')
//      }
//     })

// });

/**
 * menu js implementation starts here
 */
for (let list of lists) {
  list.addEventListener('click', function () {
    let j = 0;
    while (j < lists.length) {
      lists[j++].className = 'list';
      // console.log(lists[j++].className = "list");
    }
    list.className = 'list focus';

    // console.log(list);
  });

  // for (let i = 0; i < lists.length; i++) {
  //     lists[i].addEventListener('click', function(){
  //         let j = 0;
  //         while (j < lists.length) {
  //             lists[j++].className = "list"
  //         }

  //         lists[i].className = "list focus"
  //     })
  // }
}
menu.addEventListener('mouseover', function (event) {
  menu.classList.toggle('active', true);
  main.classList.toggle('active', true);
});

menu.addEventListener('mouseout', function (event) {
  menu.classList.toggle('active', false);
  main.classList.toggle('active', false);
  menu.style.transitionDuration = '0.5s';
  main.style.transitionDuration = '0.5s';
});
/**
 * menu js implementation ends here
 */

notificationIcon.addEventListener('mouseover', function (event) {
  notificationTitle.classList.toggle('active', true);
  notificationTitle.style.display = 'inline-block';
  // setTimeout(function () {
  //coming back to it
  //     notificationTitle.remove()
  // }, 2000);
});
notificationIcon.addEventListener('mouseout', function () {
  notificationTitle.style.display = 'none';
});

user.addEventListener('mouseover', () => {
  userName.classList.toggle('hidden');
  user.style.transitionDuration = '2s';
  userName.style.transitionDuration = '2s';
  // userName.style.transitionDelay = "1s"
});
user.addEventListener('mouseout', () => {
  userName.classList.add('hidden');
});

// let b = 0;

// while (b < 10) {
//     console.log(b);
//     b++
// }

chatTitle.addEventListener('click', function () {
  contactHidden.classList.remove('hide');
});
chatUsIcon.addEventListener('click', function () {
  contactHidden.classList.remove('hide');
  contactHidden.style.transitionDuration = '2s';
});

closeSpan.addEventListener('click', () => {
  contactHidden.classList.add('hide');
});
