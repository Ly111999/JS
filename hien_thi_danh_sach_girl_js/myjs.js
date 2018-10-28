var student1 = {
    rollnumber : "A001",
    name : "Tinh Em",
    avatar: "http://mygreatminds.com/wp-content/uploads/2018/04/495272006.jpg",
    phone : "09876534231",
    address : "Ha Noi"
};
var student2 = {
    rollnumber : "A002",
    name : "Tung Ga",
    avatar: "http://www.mariacenoura.pt/ptpictures/f/4/44669_most-beautiful-girl-wallpaper.jpg",
    phone : "0987654321",
    address : "Ha Noi"
};
var student3 = {
    rollnumber : "A003",
    name : "Ha Anh",
    avatar: "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&h=350",
    phone : "098765432",
    address : "Ha Noi"
};
var student4 = {
    rollnumber : "A004",
    name : "Van",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa--1OgNjo1JQS882slJg-EJcF5jteQWIyE4M-JDjdCJZ5KH_k",
    phone : "0987654321",
    address : "Ha Noi"
};
var student5 = {
    rollnumber : "A005",
    name : "AN AN",
    avatar: "https://znews-photo-td.zadn.vn/w660/Uploaded/ofh_fdmzsofw/2018_07_11/mai_tay.jpg",
    phone : "0987654321",
    address : "Ha Noi"
};
var student6 = {
    rollnumber : "A006",
    name : "Sushi",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8vraXfDV8ZFQch8jaiIAubkS7wZiCmSaSMPOP7zSDbEi0mMh",
    phone : "0987654321",
    address : "Ha Noi"
};

var listGirl = new Array();
    listGirl.push(student1);
    listGirl.push(student2);
    listGirl.push(student3);
    listGirl.push(student4);
    listGirl.push(student5);
    listGirl.push(student6);

var main = document.getElementsByClassName('main-content');
if (main != null && main.length > 0){
    var mainContent = main[0];
    for (var i = 0; i < listGirl.length; i++) {
        var itemContent = ' <div class="personal-infor">' ;
            itemContent += '<div class="avatar" style="background-image: url(' + listGirl[i].avatar +'); background-size: cover">';
            itemContent +='</div>';
            itemContent +='<div class="line-infor">';
            itemContent +='<label>Rollnumber</label>';
            itemContent +='<div>' + listGirl[i].rollnumber +'</div>';
            itemContent +='            </div>';
            // language=HTML
            itemContent +='            <div class="line-infor">';
            itemContent +='                <label>Name</label>';
            itemContent +='                <div>' + listGirl[i].name + '</div>';
            itemContent +='            </div>';
            itemContent +='            <div class="line-infor">';
            itemContent +='                <label>Phone</label>';
            itemContent +='                <div>' + listGirl[i].phone + '</div>';
            itemContent +='            </div>';
            itemContent +='            <div class="line-infor">';
            itemContent +='                <label>Address</label>';
            itemContent +='                <div>' + listGirl[i].address + '</div>';
            itemContent +='            </div>';
            itemContent +='        </div>';

        mainContent.innerHTML += itemContent;
    }
}


