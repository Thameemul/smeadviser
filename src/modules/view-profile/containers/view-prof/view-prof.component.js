    // Create a "remove" button and append it to each list item
    var myNodelist = $('LI');
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = $.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "remove";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a remove button to hide the current list item
    $("#mylist").delegate(".close", "click", function() {
    $(this).parent().remove();
});

// Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("skillset").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("skillset").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "remove";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
