const readStatusBtns = document.querySelectorAll('.read-status');
const removeBookBtns = document.querySelectorAll('.remove');


//Add status check event listener to each card that exists on page by default
for(let i = 0; i < readStatusBtns.length; i++) {
    readStatusBtns[i].addEventListener('click', changeReadStatus);
}

//Add event listener to remove button for all original cards
for(let i = 0; i < removeBookBtns.length; i++) {
    removeBookBtns[i].addEventListener('click', function() { this.parentElement.remove(); });
}


function changeReadStatus() {
    if (this.className == 'read-status not-read') {
        this.className = 'read-status read';
    }
    else {
        this.className = 'read-status not-read';
    }
}

