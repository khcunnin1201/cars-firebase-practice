
var firebaseConfig = {
    apiKey: "AIzaSyCrgxcoqvni_WVSj5gjOS_9vkf0Nf5iW1c",
    authDomain: "savvycoders-kris.firebaseapp.com",
    databaseURL: "https://savvycoders-kris.firebaseio.com",
    projectId: "savvycoders-kris",
    storageBucket: "savvycoders-kris.appspot.com",
    messagingSenderId: "1065744112782",
    appId: "1:1065744112782:web:a49739abf1571c17e07ddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  function refresh(){
    document.getElementById("stuff").innerHTML = " ";
  }

function print(something) {
    // document.write(something);
    document.getElementById("stuff").innerHTML+=something;
}
function printhello() {
    print("<h1>how are ya?</h1>")};

function addCar() {
    var carName = prompt("what is your favorite car?");
    var carMake = prompt("what company makes that car?");
    db.collection("cars").doc(carName).set({
        make: carMake,
        carName: carName,
    })
    .then(function() {
        console.log("Document written with ID: ");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    displayCars();
}
function displayCars(){
    refresh();
    db.collection("cars").get().then((mydata) => {
        mydata.forEach((doc) => {
            print("<p>"+ doc.data().make + ": " + doc.data().carName + ", "+"</p>");
        });
    });
}


// document.getElementById("stuff").innerHTML+="<h3>new heading</h3>"

// alert(document.getElementById("stuff").innerText)

// document.write("<p>something outside</p>");

// print("<h2>can't wait till christmas</h2>")

