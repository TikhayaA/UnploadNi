let openEdit = document.getElementsByClassName("pen-edit-pos");
let inputDate = document.getElementById("datepicker");
let saveEdit = document.getElementsByClassName("save-edit");
let dateBlock = document.getElementsByClassName("share_date__block");

function editInput() {
    openEdit[0].style.display = "none";
    saveEdit[0].style.display = "block";
    dateBlock[1].classList.add("input-edit");
    dateBlock[1].getElementsByClassName("input_link")[0].removeAttribute("readonly");
}
console.log(inputDate)
if (inputDate !== null) {
    inputDate.addEventListener("click", editInput);
}

let openEditArea = document.getElementsByClassName("pen-edit-area");
let saveEditArea = document.getElementsByClassName("save-edit-area");
let cancelEdit = document.getElementsByClassName("cancel-edit");
let shareMessage = document.getElementsByClassName("share_message");

function editArea() {
    openEditArea[0].style.display = "none";
    saveEditArea[0].style.display = "block";
    cancelEdit[0].style.display = "block";
    shareMessage[0].classList.add("input-edit");
    shareMessage[0].getElementsByTagName("textarea")[0].removeAttribute("readonly")
}
if (openEditArea[0] !== undefined) {
    openEditArea[0].addEventListener("click", editArea);
}

// select style 

const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu 
selectSingle_title.addEventListener('click', () => {

    if (selectSingle.getAttribute('data-state') === 'active') {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option 
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}
document.body.onclick = function(e) {
    e = e || event;
    target = e.target || e.srcElement;
    if (target.className !== "select__title") {
        selectSingle.setAttribute('data-state', '');
    }
}

let openModal = document.getElementsByClassName("open-modal");
let blackout = document.getElementsByClassName("blackout");
let modalWrap = document.getElementsByClassName("modal-wrap");
let modalClosebtn = document.getElementsByClassName("modal_close")
let downloadPpageOopenmodal = document.getElementsByClassName("download-page_openmodal")

function openModalWrap() {
    blackout[0].style.display = "block";
    modalWrap[0].style.display = "block";
}

function modalClose() {
    blackout[0].style.display = "none";
    modalWrap[0].style.display = "none";
}
if (openModal[0] !== undefined) {
    openModal[0].addEventListener("click", openModalWrap);
}
if (downloadPpageOopenmodal[0] !== undefined) {
    downloadPpageOopenmodal[0].addEventListener("click", openModalWrap);
}
if (modalClosebtn[0] !== undefined) {
    modalClosebtn[0].addEventListener("click", modalClose);
}

$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 2,
        margin: 0,
        loop: true,
        navText: ["<faq-prev'>", "<faq-next'>"],
        responsive: {
            0: {
                items: 1,
            },
            760: {
                items: 2
            }
        }
    });
    $(".faq-next").click(function() {
        owl.trigger("next.owl.carousel");
    });
    $(".faq-prev").click(function() {
        owl.trigger("prev.owl.carousel");
    });
});

let datepicker = new Datepicker('#datepicker');
$("#datepicker").val('12.08.2020');